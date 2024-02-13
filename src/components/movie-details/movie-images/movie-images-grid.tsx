export function MovieImagesGrid({className, ...props}: React.ComponentProps<"div">) {
  return <div className="grid grid-cols-4 gap-3" {...props} />;
}
