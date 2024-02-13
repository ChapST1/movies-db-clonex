import {ReloadIcon} from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <header className="flex h-dvh w-full items-center justify-center gap-1 bg-background">
      <ReloadIcon className="animate-spin " />
      loading...
    </header>
  );
}
