import { BaseProps } from './base-props';

export interface ProductItemDescription
  extends BaseProps<{
    id: string;
    title: string;
    description: string;
    isFav?: boolean;
  }> {
  id: string;
  title: string;
  description: string;
  isFav?: boolean;
}
