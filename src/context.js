import React, { useContext, useEffect, useState, createContext } from "react";

const contextApi = createContext();

const images = [
  {
    src: "/img/scroll-1.png",
    back: "/img/cover.png",
    match: false,
  },
  {
    src: "/img/potion-1.png",
    back: "/img/cover.png",
    match: false,
  },
  {
    src: "/img/sword-1.png",
    back: "/img/cover.png",
    match: false,
  },
  {
    src: "/img/shield-1.png",
    back: "/img/cover.png",
    match: false,
  },
  {
    src: "/img/helmet-1.png",
    back: "/img/cover.png",
    match: false,
  },
  {
    src: "/img/ring-1.png",
    back: "/img/cover.png",
    match: false,
  },
];

function getDefaultMode() {
  const savedMode = localStorage.getItem("theme");
  return savedMode ? savedMode : "light";
}

const AppProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [game, setGame] = useState(true);
  const [win, setWin] = useState(false);
  const [theme, setTheme] = useState(getDefaultMode());
  const [disabled, setDisabled] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffuled = () => {
    let shuffuledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffuledCards);
    setTurns(0);
  };
  const start = () => {
    setGame(false);
    setWin(false)
    shuffuled();
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        reset();
       
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }, [choiceTwo, choiceOne]);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setTurns((prev) => prev + 1);
  };

  useEffect(() => {
     const check = cards.every((card) => card.match === true);
     if (check) {
       setWin(true);
    }
  }, [cards])

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <contextApi.Provider
      value={{
        handleChoice,
        disabled,
        turns,
        game,
        cards,
        start,
        choiceOne,
        choiceTwo,
        theme,
        setTheme,
        win,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(contextApi);
};
