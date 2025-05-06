import "./style.scss";
import { FC } from 'react'
import { ButtonPropsType } from './types';

export const Button: FC<ButtonPropsType> = (props) => {
  const { children, variant = 'primary', size = 'default', className = '', ...rest } = props;

  return (
    <button
      {...rest}
      className={`button button-${variant} button-${size} ${className}`}
    >
      {children}
    </button>
  )
}
