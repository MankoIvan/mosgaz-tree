export const getTime = (time: number): string => {
  if (time === 0) return ''

  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const stringedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return stringedTime
}