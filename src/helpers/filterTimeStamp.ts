import { subDays } from "date-fns";

export default function filterTimeStamp(
  array: any,
  filteredDate: number,
  dateVariable: string
) {
  const date = new Date();
  const daysAgo = subDays(date, filteredDate);

  return array.filter((item: any) => {
    const thisDate = new Date(item[dateVariable]);
    return thisDate >= daysAgo;
  });
}
