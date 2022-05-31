import { CSSProperties } from 'react';
import { PropsWithStyles } from '../../types/props-with-stypes';
import styles from './Card.module.css';

const Card = (props: PropsWithStyles) => {
  return (
    <div className={styles.card} style={props.style && props.style}>
      {props.children}
    </div>
  );
};

export default Card;
