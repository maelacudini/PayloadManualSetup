import {
  FC, HTMLAttributes, PropsWithChildren 
} from 'react'
import "./style.scss";

export const BodyLayout: FC<PropsWithChildren<HTMLAttributes<HTMLBodyElement>>> = (props) => {
  const { children, ...rest } = props;

  return (
    <body
      {...rest}
      className={`body ${rest.className}`}
    >
      {children}
    </body>
  )
}
