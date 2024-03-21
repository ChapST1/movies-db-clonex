import {twMerge} from "tailwind-merge";

interface MediaDetailsHeroPicture extends React.ComponentProps<"picture"> {
  title: string;
  posterPath: string;
}

export function MediaDetailsHeroPicture({
  title,
  posterPath,
  className,
  ...props
}: MediaDetailsHeroPicture) {
  return (
    <picture className={twMerge("relative flex items-center justify-center", className)} {...props}>
      <img
        alt={title}
        className="aspect-[1/0] w-44 pb-5 md:w-auto md:pb-0"
        src={posterPath}
        style={{
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />
    </picture>
  );
}
