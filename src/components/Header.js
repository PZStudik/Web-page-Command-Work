import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My dream team number Dos</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "2em",
    color: "#6a0dad",
    textAlign: "center",
    fontWeight: "bold",
    textWeight: "900",
  },
};

export default Header;
