import "@testing-library/jest-dom";
import { formatDate } from "@/utils/date/format";

test("Date型を引数に渡した時にyyyy/mm/ddに変換されること", () => {
  const result = formatDate({ date: new Date("2022-12-22") });
  expect(result).toBe("2022/12/22");
});
