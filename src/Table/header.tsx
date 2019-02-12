import React from "react";

import { TableSortLabel, TableCell } from "@material-ui/core";
import classNames from "classnames";
import { SortDirection } from "react-virtualized";

import * as types from "../types";

interface Props {
  label: string;
  columnIndex: number;
  key: string;
  sortBy: any;
  sortDirection: string;
  columns: types.IColumn[];
  classes: any;
  sort: any;
  headerHeight: number;
}
class Header extends React.Component<Props> {
  render() {
    const {
      columnIndex,
      sortBy,
      sortDirection,
      headerHeight,
      columns,
      classes,
      sort
    } = this.props;

    const direction = {
      [SortDirection.ASC]: "asc",
      [SortDirection.DESC]: "desc"
    };
    console.log(sortBy, sortDirection, headerHeight, sort);
    const { label, key, numeric, disableSort, width, id } = columns[
      columnIndex
    ];
    const inner =
      !disableSort && sort != null ? (
        <TableSortLabel
          active={key === sortBy}
          direction={direction[sortDirection]}
        >
          {label}
        </TableSortLabel>
      ) : (
        label
      );

    return (
      <TableCell
        className={classNames(classes.tableCell, classes.flexContainer)}
        variant="head"
        style={{ height: headerHeight, flex: 1 }}
        align={numeric || false ? "right" : "left"}
      >
        {inner}
      </TableCell>
    );
  }
}

export default Header;
