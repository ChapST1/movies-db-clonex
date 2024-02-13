/**
 *  https://www.codingbeautydev.com/blog/javascript-convert-minutes-to-hours-and-minutes
 */
export function formatMediaRuntime(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours ? hours + "h" : ""} ${minutes}m`;
}
