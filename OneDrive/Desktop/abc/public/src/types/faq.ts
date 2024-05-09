export interface IFaqRecord {
  id: number;
  uuid: string;
  question: string;
  answer: string;
  type: number;
  status: number;
  isDeleted: number;
  createdAt: string;
  updatedAt: string;
}