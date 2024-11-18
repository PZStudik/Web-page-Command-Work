import React, { useState } from "react";

const Body = () => {

    // Масив з нашими картками. Тут задається зображення картки, підпис та інформація для InfoSection
    // До своєї картки ставите ID згідно номеру в групі:Єва-1, Таміла-2, Дмитро-3, Назар-4, Уляна-5, Влад-6

    const cards = [
        {
            // Картка екземпляру
            id: 4,
            img: "/Nazar_Kobliuk.jpg",     // Шлях до зображення
            name: "Kobliuk Nazar",                // Ім'я картки
            position: "Software Engineer",  // Посада в картці
            info: "I am a Software Engineering student at LPNU with experience in C, C++, and Assembly programming. I am also familiar with Python and Pascal and have minor experience in HTML/CSS for creating simple web pages. I enjoy solving problems, learning new technologies, and working on both system-level and web development projects." // Інформація про картку
                + " \u25AA Location: Lviv. \u25AA Number: +380664118658. \u25AA Email: nazar.kobliuk.pz.2023@lpnu.ua" // Контактна інформація
        }
    ];

    // Стан для збереження вибраної картки
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    // Функція для форматування інформації в InfoSection
    const formatInfo = (info) => {
        const infoArray = info.split(" \u25AA"); // Розбиваємо інформацію по символу " \u25AA"

        return (
            <div>

                {/* About me текст */}
                <p style={{
                    ...styles.aboutMeText,
                    fontSize: "1.2em", fontWeight: "bold", textIndent: "0" // Збільшуємо розмір шрифта для "About me"
                }}>ABOUT ME:</p>
                <p style={styles.aboutMeText}>
                    {infoArray[0].trim()}
                </p>

                {/* Виводимо решту тексту з контактною інформацією */}
                <p style={{
                    ...styles.aboutMeText,
                    fontSize: "1.1em", fontWeight: "bold", marginTop: "3em", textIndent: "0"
                }}>CONTACT INFO:</p>
                {infoArray.slice(1).map((text, index) => (
                    <p key={index} style={styles.contactText}>{text.trim()}</p>
                ))}
            </div>
        );
    };

    return (
        <div>
            <main style={styles.cardList}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        style={{
                            ...styles.card,
                            ...(selectedCard?.id === card.id
                                ? {
                                    ...styles.selectedCard,
                                    border: card.id === 4 ? "2px solid #68001D" : "2px solid #111111",
                                    boxShadow: card.id === 4 ? "0 4px 50px rgba(140, 0, 140, 0.9)" : "0 4px 50px rgba(110, 0, 110, 0.6)"
                                  }
                                : {}),
                        }}
                        onClick={() => handleCardClick(card)} // Обробник кліку
                    >
                        <img src={card.img} alt={card.name} style={styles.photo} />
                        <div style={styles.textContainer}>
                            <h2 style={styles.name}>{card.name}</h2>
                            <p style={styles.position}>{ card.position}</p>
                        </div>
                    </div>
                ))}
            </main>

            {selectedCard && (
                <section style={styles.infoSection}>
                    <h2 style={styles.infoName}>{selectedCard.name}</h2> {/* Центруємо ім'я */}
                    {formatInfo(selectedCard.info)}
                </section>
            )}
        </div>
    );
};

const styles = {
    cardList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1em",
        padding: "1em",
        backgroundColor: "rgba(255, 255, 255, 0)",
        marginBottom: "4em",
    },

    // Картки
    card: {
        width: "150px",
        padding: "1em",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        transition: "transform 0.2s",
    },

    // Зображення картки
    photo: {
        width: "100px",
        height: "100px",
        borderRadius: "10%",
        border: "2px solid #111111",
        objectFit: "cover",
    },

    // Текст картки
    textContainer: {
        marginTop: "0.5em",
    },

    // Ім'я в картці
    name: {
        fontSize: "1.3em",
        fontWeight: "bold",
        color: "#333",
        margin: "0",
    },

    // Посада в картці
    position: {
        fontSize: "0.9em",
        color: "#6a0dad",
        margin: "0.5em 0 0 0",
    },

    // Виділена картка
    selectedCard: {
        boxShadow: "0 4px 50px rgba(110, 0, 110, 0.6)",
        border: "2px solid #111111",
        transform: "scale(1.15)",
    },

    // Контейнер з інформацією
    infoSection: {
        padding: "50px",
        backgroundColor: "#f1f1ff",
        border: "1px solid #111111",
        borderRadius: "70px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        width: "800px",
        height: "auto",
        margin: "0 auto",
        textAlign: "left",
        overflow: "hidden",
        marginBottom: "15em",
    },

    // Ім'я в контейнері з інформацією
    infoName: {
        textAlign: "center",
        fontSize: "1.5em",  
        fontWeight: "bold",
        marginBottom: "1em",
        marginTop: "0", 
    },

    // Текст в контейнері з інформацією
    infoText: {
        margin: "10px",
        lineHeight: "1.6",
        fontSize: "1em",  
        textAlign: "left",
    },

    // Текст "About me" 
    aboutMeText: {
        fontSize: "1.1em",
        fontWeight: "600",
        textIndent: "30px",
    },

    // Контактна інформація
    contactText: {
        fontSize: "0.8 em",
        fontWeight: "600", 
        textAlign: "left", 
        textIndent: "30px",
    },

};

export default Body;