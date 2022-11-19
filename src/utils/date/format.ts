import { format } from "date-fns";

interface FormatDateProps {
  date: Date;
}

export const formatDate = ({ date }: FormatDateProps) => {
  return format(date, "yyyy/MM/dd");
};
