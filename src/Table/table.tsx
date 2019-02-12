/* eslint-disable no-console */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import styles, { styles2 } from "./styles";
import { AutoSizer, Column, SortDirection, Table } from "react-virtualized";
//import * as TableDataTypes from "constants/tableDataTypes";
import moment from "moment";
import "react-virtualized/styles.css";
//import "./styles.css";
import * as types from "../types";
import Header from "./header";
import Cell from "./cell";

interface Props {
  classes: any;
  onRowClick: any;
  columns: types.IColumn[];
  headerHeight: number;
  rowClassName: string;
  rowHeight: number;
  sort: any;
  rowGetter: any;
  rowCount: number;
}

class MuiVirtualizedTable extends React.Component<Props> {
  public static defaultProps = {
    headerHeight: 56,
    rowHeight: 56
  };
  getRowClassName = () => {
    const { classes, rowClassName, onRowClick } = this.props;
    const index = -1;
    return classNames(classes.tableRow, classes.flexContainer, rowClassName, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };
  headerRender = (headerProps:any) => {
    return <Header {...headerProps} {...this.props} />;
  };
  cellRender = (cellProps: any) => {
    return <Cell {...cellProps} {...this.props} />;
  };
  render() {
    const { classes, columns, ...tableProps } = this.props;
    console.log(this.props);
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            height={height}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ key, ...other }, index) => {
              return (
                <Column
                  key={key}
                  headerRenderer={headerProps =>
                    this.headerRender({ headerProps, columnIndex: index })
                  }
                  flexGrow={1}
                  className={classNames(classes.flexContainer)}
                  cellRenderer={this.cellRender}
                  headerStyle={{ margin: 0 }}
                  dataKey={key}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

const WrappedVirtualizedTable = withStyles(styles2)(MuiVirtualizedTable);

interface ReactVirtualizedTableProps {
  columns: types.IColumn[];
  data: types.IData[];
  classes: any;
}
class ReactVirtualizedTable extends React.Component<
  ReactVirtualizedTableProps
> {
  render() {
    const { columns, data, classes } = this.props;
    return (
      <div className={classes.root}>
        <WrappedVirtualizedTable
          rowCount={data.length}
          rowGetter={({ index }: any) => data[index]}
          columns={columns}
          sort={{}}
          rowClassName="asdf"
          headerHeight={56}
          rowHeight={56}
          onRowClick={{}}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ReactVirtualizedTable);
