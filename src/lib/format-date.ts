export function formatDate(date: string) {
  const currentDate = new Date(date);

  return new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(currentDate);
}
