import { BOX_SHADOW } from "@/constants/style";

export const setClassToTable = (element: HTMLDivElement) => {
  const tableTag = element.getElementsByTagName("table");
  Array.from(tableTag).forEach((elm) => {
    elm.style.tableLayout = "auto";
    elm.style.width = "70%";
    elm.style.boxShadow = BOX_SHADOW.MAIN;
  });

  const theadTag = element.getElementsByTagName("thead");
  Array.from(theadTag).forEach((elm) => {
    elm.classList.add("ant-table-thead");
  });

  const thTag = element.getElementsByTagName("th");
  Array.from(thTag).forEach((elm) => {
    elm.classList.add("ant-table-cell");
  });

  const tdTag = element.getElementsByTagName("td");
  Array.from(tdTag).forEach((elm) => {
    elm.classList.add("ant-table-cell");
  });

  const trTag = element.getElementsByTagName("tr");
  Array.from(trTag).forEach((elm) => {
    elm.classList.add("ant-table-row");
  });

  const tbodyTag = element.getElementsByTagName("tbody");
  Array.from(tbodyTag).forEach((elm) => {
    elm.classList.add("ant-table-tbody");
  });
};
