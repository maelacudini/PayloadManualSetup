import { HTMLAttributes, PropsWithChildren } from "react";

export type ButtonType = {
  variant?: "primary" | "secondary" | "outline" | "muted" | "ghost" | "link";
  size?: "default" | "icon";
}

export type ButtonPropsType = PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & ButtonType;
