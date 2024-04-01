import {twMerge} from "tailwind-merge";

interface MediaDetailsHero extends React.ComponentProps<"section"> {
  children: React.ReactNode;
  heroImage: string;
}

export function MediaDetailsHero({children, heroImage, className, ...props}: MediaDetailsHero) {
  return (
    <section
      className={twMerge(
        "relative mt-4 grid w-full px-2 py-7 md:grid-cols-[400px,1fr] md:px-0",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(to top, hsl(var(--background)), 80%, rgba(0, 0, 255, 0.057)), url("${heroImage}")`,
        backgroundSize: "cover",
      }}
      {...props}
    >
      {children}
    </section>
  );
}
