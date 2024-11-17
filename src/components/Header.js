import React from "react";

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.textBackground}>My dream team number Dos</h1>
        </header>
    );
};

const styles = {
    header: {
        padding: "2em",
        textAlign: "center",
        backgroundColor: "rgba(255,255,255,0)", // Фон хедера
    },
    textBackground: {
        display: "inline-block",
        padding: "0.1em 0.5em", 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "10px",
        color: "#6a0dad", 
        fontWeight: "bold",
        textWeight: "900",
    },
};

export default Header;
