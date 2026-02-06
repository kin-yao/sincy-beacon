export type ProductStatus = 'verified' | 'unknown' | 'flagged';

export type Product = {
  id: string;
  name: string;
  barcode: string;
  category: string;
  sacco: string;
  location: string;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
};

export type Farmer = {
  id: string;
  name: string;
  phone: string;
  nationalId: string;
  location: string;
  sacco: string;
  createdAt: string;
  updatedAt: string;
};

export type ScanHistory = {
  id: string;
  barcode: string;
  productId?: string;
  result: 'matched' | 'not_found';
  notes: string;
  scannedAt: string;
};

export type LocalDB = {
  products: Product[];
  farmers: Farmer[];
  scans: ScanHistory[];
};
