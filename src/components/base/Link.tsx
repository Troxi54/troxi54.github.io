import { ChildrenProps, ClassNameProps } from "src/types/react";
import cn from "src/utils/tailwind";

interface Props extends ChildrenProps, ClassNameProps {
  href: string;
}

function Link({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
    >
      {children}
    </a>
  );
}

export default Link;
