/**
 * 日付をYYYY.MM.DDの形式にフォーマットする
 * 
 * @param dateStr: Date
 * @returns formattedDate: string
 */
export const formatDate = (dateStr: Date): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`;
};
