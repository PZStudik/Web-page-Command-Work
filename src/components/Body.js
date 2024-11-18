import React, { useState } from "react";

const Body = () => {

    // Масив з нашими картками. Тут задається зображення картки, підпис та інформація для InfoSection
    // До своєї картки ставите ID згідно номеру в групі:Єва-1, Таміла-2, Дмитро-3, Назар-4, Уляна-5, Влад-6

    const cards = [
        {

            // Картка екземпляру
            id: 1,
            img: "/Eva_Ivanova.jpg",
            name: "Ivanova Eva",
            position: "Software Engineer",
            info: "Software Engineering student at LPNU with experience in C, C++, and Assembly. Passionate about coding and eager to learn new technologies. Strong foundation in software development principles and algorithms. Enjoys collaborating in team environments and has excellent problem-solving skills. Dedicated to continuous learning and personal growth, and looking forward to applying skills in real-world projects."
                + " \u25AA Location: Lviv. \u25AA Number: +380672048040. \u25AA Email: veronika-ieva.ivanova.pz.2023@lpnu.ua"
        },
        {
            // Картка екземпляру

            id: 2,
            img: "/Ivaskevych_Tamila.jpg",
            name: "Ivaskevych Tamila",        
            position: "Software Engineer", 
            info: "I am currently studying Software Engineering at LPNU with experience in programming languages such as C, C++, and Assembly.  I enjoy the creative process of coding and the satisfaction of solving complex problems, whether it's developing software, working on algorithms, or experimenting with new tools." 
                + " \u25AA Location: Lviv. \u25AA Number: +380989996824. \u25AA Email: tamila.ivaskevych.pz.2023@lpnu.ua" 
        },
        {
            // Dmytro Card
            id: 3,
            img: "/Dmytro_Ilchenko.png",     // Шлях до зображення
            name: "Ilchenko Dmytro",                // Ім'я картки
            position: "Software Engineer",  // Посада в картці
            info: "I am a skilled full-stack developer specializing in C++ and C# programming, with expertise in WinForms and WPF. He is passionate about object-oriented programming, creating efficient algorithms, and process automation. I have experience in database management, multithreading, and integrating server solutions."
                + " \u25AA Location: Lviv. \u25AA Number: +380964856964. \u25AA Email: dimaks06@ukr.net" // Контактна інформація
        },
        {
            // Nazar Card

            id: 4,
            img: "/Nazar_Kobliuk.jpg",     // Шлях до зображення
            name: "Kobliuk Nazar",                // Ім'я картки
            position: "Software Engineer",  // Посада в картці
            info: "I am a Software Engineering student at LPNU with experience in C, C++, and Assembly programming. I am also familiar with Python and Pascal and have minor experience in HTML/CSS for creating simple web pages. I enjoy solving problems, learning new technologies, and working on both system-level and web development projects." // Інформація про картку
                + " \u25AA Location: Lviv. \u25AA Number: +380664118658. \u25AA Email: nazar.kobliuk.pz.2023@lpnu.ua" // Контактна інформація
        },
        {
            //Vlad Card
            id: 6,
            img: "/Vlad_Melnychuk.png",     // Шлях до зображення
            name: "Melnychuk Vladyslav",                // Ім'я картки
            position: "Software Engineer",  // Посада в картці
            info: "I am a proficient developer specializing in C and C++ programming, with foundational knowledge of assembly language. Currently, I am studying at NULP University, with a strong interest in algorithm optimization, multithreading, and low-level programming. I enjoy tackling complex technical challenges and building efficient solutions."
                + " \u25AA Location: Lviv. \u25AA Number: +380933847300. \u25AA Email: vladyslav.melnychuk.pz.2023@lpnu.ua" // Контактна інформація
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
                                    border: card.id === 4 ? "2px solid #68001D" : card.id === 3 ? "2px solid #91646c" : card.id === 2 ? "2px solid #FF69B4" : card.id === 1 ? "2px solid #131954" : card.id === 6 ? "2px solid #C62E2E" : "2px solid #111111",
                                    boxShadow: card.id === 4 ? "0 4px 50px rgba(140, 0, 140, 0.9)" : card.id === 3 ? "0 4px 50px rgba(191,151,171, 0.9)" : card.id === 2 ? "0 4px 50px rgba(255, 105, 180, 0.6)" : card.id === 1 ? "0 4px 50px rgba(28, 43, 186, 0.9)" : card.id === 6 ? "0 4px 50px rgba(249, 84, 84, 0.8)":"0 4px 50px rgba(110, 0, 110, 0.6)"

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
        fontSize: "1.1em",
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