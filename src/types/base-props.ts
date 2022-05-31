import { CSSProperties, ReactNode } from 'react';

export interface BaseProps<P extends object> {
  children: ReactNode;
  props?: { [key: string]: P | undefined };
}
