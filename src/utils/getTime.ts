export const getTime = (time: number): string => {

  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const stringedTime = `${hours ? `${hours}ч` : ""} ${minutes ? `${minutes}мин` : ""
    }`.trim();

  return stringedTime
}