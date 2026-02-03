import { Fragment, ReactNode } from "react";
import Link from "./Link";
import cn from "src/utils/tailwind";

type Props = {
  name: string;
  screenshotSrc: string;
  src: string;
  sourceSrc?: string;
  stack: ReactNode;
  description: ReactNode;
  links?: {
    name: string;
    src: string;
  }[];
};

function Project({
  name,
  screenshotSrc,
  src,
  sourceSrc,
  stack,
  description,
  links,
}: Props) {
  const fullLinks = [
    ...(sourceSrc ? [{ name: "Source code", src: sourceSrc }] : []),
    ...(links ?? []),
  ];

  return (
    <article
      className={cn(
        "flex-centralize flex-col lg:flex-row w-full space-x-5 bg-block justify-start",
        "border border-[#ffffff0d]",
        "shadow-[0_0px_15px_#312e81]",
        "transition duration-300 ease-in-out",
        "rounded-2xl overflow-hidden",
        "hover:transform-[scale(1.02)] hover:shadow-[0_0px_25px_#6366f1]",
      )}
    >
      <img
        src={screenshotSrc}
        alt={`${name} screenshot`}
        loading="lazy"
        className={cn("m-0 inline-flex w-full sm:w-100", "border-none")}
      />
      <div className="w-full flex-col py-2 px-4">
        <h3 className="mb-2">
          <Link href={src}>{name}</Link>
        </h3>
        <p>Stack used: {stack}</p>
        <p className="text-sm text-secondary-text text-balance">
          {description}
        </p>
        <p className="mt-2">
          {fullLinks.map((link, index) => {
            const notFirst = index > 0;
            return (
              <Fragment key={index}>
                {notFirst && ", "}
                <Link href={link.src}>{link.name}</Link>
              </Fragment>
            );
          })}
        </p>
      </div>
    </article>
  );
}

export default Project;
