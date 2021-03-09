import React, { SyntheticEvent } from 'react';
import styles from './auth-button.module.css';

type Props = {
  value: string;
  handleClick: (event: SyntheticEvent) => void;
};

const AuthButton: React.FC<Props> = ({ value, handleClick }) => {
  return (
    <input
      className={styles['auth-button']}
      type="submit"
      value={value}
      onClick={(event: SyntheticEvent) => handleClick(event)}
    />
  );
};

export { AuthButton };
