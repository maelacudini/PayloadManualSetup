import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import "./style.scss";

export const MainLayout: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = (props) => {
  const { children, ...rest } = props;

  return (
    <main
      {...rest}
      className={`main ${rest.className}`}
    >
      {children}
    </main>
  )
}
