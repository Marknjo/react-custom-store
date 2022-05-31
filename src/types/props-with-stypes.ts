import { CSSProperties } from 'react';
import { BaseProps } from './base-props';

export interface PropsWithStyles extends BaseProps<{ style?: CSSProperties }> {
  style?: CSSProperties;
}
