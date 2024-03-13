import {Loader} from "lucide-react";

export default function PersonLoading() {
  return (
    <div className="flex h-[calc(100dvh-64px)] w-full items-center justify-center">
      <Loader className="size-7 animate-spin" />
    </div>
  );
}
