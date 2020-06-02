import React from "react";
import NavBar from "./navBar";
import Invoice from "./invoice";

const styles = {
  mainContainer: {
    display: "flex-inline",
    flexDirection: "row",
    backgroundColor: "white",
    height: "98vh",
  },
  invoiceContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

/*
    Parent application wrapping for adding styles and arranging navigation bar, Invoice on page.
*/
const App = () => (
  <div style={styles.mainContainer}>
    <NavBar />
    <div style={styles.invoiceContainer}>
      <Invoice />
    </div>
  </div>
);

export default App;
