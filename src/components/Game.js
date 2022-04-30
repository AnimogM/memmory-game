import { useGlobalContext } from "../context";
import SingleCard from "./SingleCard";
import Confetti from "react-confetti";

function Game() {
  const { start, cards, choiceOne, choiceTwo, turns, game, win } =
    useGlobalContext();

  if (game) {
    return (
      <div className="py-32 flex items-center justify-center text-center">
        <div className="bg-white dark:bg-black shadow rounded-lg p-10">
          <h2 className="font-bold pb-5 text-3xl dark:text-white">
            Memory Game
          </h2>
          <button
            className="bg-red-600 font-medium text-white  px-10 rounded-full cursor-pointer py-2"
            onClick={start}
          >
            start Game
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-[90vh] flex items-center flex-col justify-center">
      {win && (
        <div className="fixed z-50 inset-0 h-screen  overflow-hidden w-full flex justify-center items-center bg-[rgba(0,0,0,.5)]">
          <Confetti />
          <div className="text-center bg-white p-8 rounded-lg ">
            <p className="py-2 font-medium">You Won!!!</p>
            <button
              className="bg-red-600 font-medium text-white  px-10 rounded-full cursor-pointer py-2"
              onClick={start}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 lg:grid-cols-4 justify-center w-[1000px] max-w-full mx-auto p-10 md:p-20 gap-5">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            flip={choiceOne === card || choiceTwo === card || card.match}
          />
        ))}
      </div>
      <p className="text-center pb-5">Turns: {turns}</p>
    </div>
  );
}

export default Game;
