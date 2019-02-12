import { lighten } from "@material-ui/core/styles/colorManipulator";
import { Theme, createStyles } from "@material-ui/core";

export const styles2 = (theme: Theme) =>
  createStyles({
    table: {
      fontFamily: theme.typography.fontFamily
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      flex: 1
    },
    tableRow: {
      cursor: "pointer"
    },
    tableRowHover: {
      "&:hover": {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1
    },
    noClick: {
      cursor: "initial"
    }
  });

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: "100%"
    },
    tableWrapper: {
      overflowX: "auto"
    },
    toolbarRoot: {
      paddingRight: theme.spacing.unit
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    spacer: {
      flex: "1 1 100%"
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: "0 0 auto",
      textOverflow: "ellipsis"
    },
    headerCell: {
      background: "white",
      position: "sticky",
      top: 0
    }
  });
