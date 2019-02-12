import React from "react";

import { TableSortLabel, TableCell } from "@material-ui/core";
import classNames from "classnames";
import { SortDirection } from "react-virtualized";

import * as types from "../types";

interface Props {
  classes: any;
  columnIndex: number;
  cellData: any;
  columns: types.IColumn[];
  rowHeight: number;
  onRowClick: any;
}
class Cell extends React.Component<Props> {
  render() {
    const {
      cellData,
      columns,
      classes,
      rowHeight,
      onRowClick,
      columnIndex
    } = this.props;
    const { type, key } = columns[columnIndex];
    console.log(cellData);

    const cellClassName = classNames(classes.tableCell, classes.flexContainer);

    if (type === "NUMBER") {
      return (
        <TableCell
          className={cellClassName}
          style={{ height: rowHeight }}
          padding="dense"
          key={key}
          align="right"
        >
          {cellData}
        </TableCell>
      );
    } else if (type === "STRING") {
      return (
        <TableCell
          className={cellClassName}
          style={{ height: rowHeight }}
          padding="dense"
          key={key}
        >
          {cellData}
        </TableCell>
      );
    }
  }
}

export default Cell;

// else if (type === TableDataTypes.OBJECT) {
//   //console.log(columns,columnIndex,columns[columnIndex], cellData)
//   // The reduce function here is just used to deconstruct the objects to the value that we want on the table
//   return (
//     <TableCell
//       className={c}
//       style={{ height: rowHeight }}
//       padding="dense"
//       key={id + keys.join("")}
//     >
//       {keys.reduce((object, currentKey) => {
//         // this just checks if the object is defined. it prevents error that would occur if you got the wrong id on a item for some reason.
//         return object === undefined ? null : object[currentKey];
//       }, cellData)}
//     </TableCell>
//   );
// } else if (type === TableDataTypes.DATE) {
//   return (
//     <TableCell
//       className={c}
//       style={{ height: rowHeight }}
//       padding="dense"
//       key={id}
//     >
//       {moment(cellData).format("MM/DD/YY")}
//     </TableCell>
//   );
// } else if (type === TableDataTypes.DATETIME) {
//   return (
//     <TableCell
//       className={c}
//       style={{ height: rowHeight }}
//       padding="dense"
//       key={id}
//     >
//       {moment(cellData).format("hh:mm a MM/DD")}
//     </TableCell>
//   );
// } else if (type === TableDataTypes.LENGTH) {
//   const length = moment.duration(cellData, "minutes");
//   return (
//     <TableCell
//       className={c}
//       style={{ height: rowHeight }}
//       padding="dense"
//       key={id}
//     >{`${length.hours()}h ${length.minutes()}m`}</TableCell>
//   );
// }
