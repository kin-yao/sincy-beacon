import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Farmer, LocalDB, Product, ScanHistory } from './types';

const STORAGE_KEY = 'sincy-offline-db-v1';

const now = () => new Date().toISOString();
const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

const seedData: LocalDB = {
  products: [
    { id: uid(), name: 'DAP Fertilizer 50kg', barcode: '616100100001', category: 'Fertilizer', sacco: 'Tai SACCO', location: 'Nakuru', status: 'verified', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'CAN Fertilizer 50kg', barcode: '616100100002', category: 'Fertilizer', sacco: 'Setyon SACCO', location: 'Eldoret', status: 'verified', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Maize Seed H6213', barcode: '616100100003', category: 'Seed', sacco: 'Tai SACCO', location: 'Nyandarua', status: 'unknown', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Topdress Fertilizer', barcode: '616100100004', category: 'Fertilizer', sacco: 'Setyon SACCO', location: 'Meru', status: 'verified', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Duduthrin Insecticide', barcode: '616100100005', category: 'Pesticide', sacco: 'Tai SACCO', location: 'Nyeri', status: 'flagged', createdAt: now(), updatedAt: now() },
  ],
  farmers: [
    { id: uid(), name: 'Wanjiku', phone: '+254712334455', nationalId: '31245678', location: 'Nakuru', sacco: 'Tai SACCO', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Otieno', phone: '+254723778899', nationalId: '28765432', location: 'Eldoret', sacco: 'Setyon SACCO', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Kamau', phone: '+254711228877', nationalId: '29881234', location: 'Nyandarua', sacco: 'Tai SACCO', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Amina', phone: '+254701556677', nationalId: '33445566', location: 'Meru', sacco: 'Setyon SACCO', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Njeri', phone: '+254733114455', nationalId: '30981234', location: 'Nyeri', sacco: 'Tai SACCO', createdAt: now(), updatedAt: now() },
    { id: uid(), name: 'Kiptoo', phone: '+254745009988', nationalId: '26662221', location: 'Laikipia', sacco: 'Setyon SACCO', createdAt: now(), updatedAt: now() },
  ],
  scans: [],
};

function canUseLocalStorage() {
  return typeof globalThis !== 'undefined' && !!globalThis.localStorage;
}

function readDB(): LocalDB {
  if (canUseLocalStorage()) {
    const raw = globalThis.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw) as LocalDB;
      } catch {
        return seedData;
      }
    }
    return seedData;
  }
  return seedData;
}

function writeDB(db: LocalDB) {
  if (canUseLocalStorage()) {
    globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  }
}

type RepoContextType = {
  db: LocalDB;
  refresh: () => void;
  addProduct: (payload: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateProduct: (id: string, payload: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addFarmer: (payload: Omit<Farmer, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateFarmer: (id: string, payload: Partial<Farmer>) => void;
  deleteFarmer: (id: string) => void;
  addScan: (payload: Omit<ScanHistory, 'id' | 'scannedAt'>) => void;
};

const RepoContext = createContext<RepoContextType | null>(null);

export function OfflineRepoProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<LocalDB>(seedData);

  const refresh = () => setDb(readDB());

  useEffect(() => {
    const next = readDB();
    writeDB(next);
    setDb(next);
  }, []);

  const save = (next: LocalDB) => {
    setDb(next);
    writeDB(next);
  };

  const value = useMemo<RepoContextType>(() => ({
    db,
    refresh,
    addProduct: (payload) => {
      if (!payload.name.trim() || !payload.barcode.trim()) {
        throw new Error('Product name and barcode are required.');
      }
      const id = uid();
      const item: Product = { ...payload, id, createdAt: now(), updatedAt: now() };
      save({ ...db, products: [item, ...db.products] });
      return id;
    },
    updateProduct: (id, payload) => {
      const products = db.products.map((item) => (item.id === id ? { ...item, ...payload, updatedAt: now() } : item));
      save({ ...db, products });
    },
    deleteProduct: (id) => save({ ...db, products: db.products.filter((item) => item.id !== id) }),
    addFarmer: (payload) => {
      if (!payload.name.trim() || !payload.phone.trim() || !payload.nationalId.trim()) {
        throw new Error('Farmer name, phone and national ID are required.');
      }
      const id = uid();
      const item: Farmer = { ...payload, id, createdAt: now(), updatedAt: now() };
      save({ ...db, farmers: [item, ...db.farmers] });
      return id;
    },
    updateFarmer: (id, payload) => {
      const farmers = db.farmers.map((item) => (item.id === id ? { ...item, ...payload, updatedAt: now() } : item));
      save({ ...db, farmers });
    },
    deleteFarmer: (id) => save({ ...db, farmers: db.farmers.filter((item) => item.id !== id) }),
    addScan: (payload) => {
      const item: ScanHistory = { ...payload, id: uid(), scannedAt: now() };
      save({ ...db, scans: [item, ...db.scans] });
    },
  }), [db]);

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
}

export function useOfflineRepo() {
  const value = useContext(RepoContext);
  if (!value) {
    throw new Error('useOfflineRepo must be used within OfflineRepoProvider');
  }
  return value;
}
