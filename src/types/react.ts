import { ReactNode } from "react";

export type ClassName = string;

export interface ChildrenProps {
  children?: ReactNode;
}

export interface ClassNameProps {
  className?: ClassName;
}
