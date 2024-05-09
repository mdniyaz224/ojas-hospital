
export interface INewsRecord {
  id: number;
  uuid?: string;
  newsCategoryId?: number;
  title?: string;
  description?: string;
  content?: string;
  imageUrl: string;
  imageDisplayName?: string;
  label?: string;
  name?: string;
  status?: number;
  isDeleted?: number;
  createdAt?: string;
  updatedAt?: string;


}

