export type TSize = 'small' | 'medium' | 'large';
export type TColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
export type TVariant = 'contained' | 'outlined' | 'text';

export const enum ToasterDuration {
  Slow = 10000,
  Fast = 1000,
  Medium = 3000
}
export type TKeysWithAny = {
  [key: string]: any;
};