// Example theme.js
import theme from "mdx-deck/themes";

export default {
  ...theme,
  font: "Avenir, Helvetica, sans-serif",
  table: {
    borderCollapse: "collapse",
    margin: "5px",
    width: "95%",
    td: {
      border: "1px solid black",
      padding: "1rem"
    }
  },
  css: {
    ...theme.css,
    li: {
      textAlign: "left",
      marginBottom: "1rem"
    },
    kbd: {
      fontFamily: "Avenir, Helvetica, sans-serif",
      display: "inline-block",
      borderRadius: "3px",
      padding: "5px 10px",
      textShadow: "0 0 4px #ffffff66",
      boxShadow: "1px 1px 1px #777",
      margin: "3px",
      verticalAlign: "text-bottom",
      background: "#111",
      fontWeight: "600",
      color: "#EEE",
      fontVariant: "small-caps",
      letterSpacing: "1px"
    }
  },
  colors: {
    ...theme.colors,
    text: "#333"
  }
};
