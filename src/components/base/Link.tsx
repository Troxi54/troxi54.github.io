import { ChildrenProps, ClassNameProps } from "@/types/react";
import cn from "@/utils/tailwind";

interface Props extends ChildrenProps, ClassNameProps {
  href: string;
}

function Link({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-accent transition-[text-shadow] duration-200 hover:text-shadow-[0_0_5px] hover:text-shadow-accent",
        className,
      )}
    >
      {children}
    </a>
  );
}

export default Link;
