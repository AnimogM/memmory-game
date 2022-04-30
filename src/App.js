import { useGlobalContext } from "./context";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import Game from "./components/Game";

function App() {
  const { start, theme, setTheme } = useGlobalContext();

  return (
    <div className="bg-gray-100 dark:bg-gray-600 min-h-screen">
      <header className="shadow-md p-4">
        <div className="w-11/12 mx-auto flex justify-between">
          <button
            className="bg-red-600 font-medium text-white px-10 rounded-lg cursor-pointer py-2"
            onClick={start}
          >
            New Game
          </button>
          <div className="cursor-pointer flex items-center">
            <button
              className="text-xl dark:text-white"
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
            >
              {theme === "light" ? <BsFillMoonFill /> : <BsSun />}
            </button>
          </div>
        </div>
      </header>
      <Game />
    </div>
  );
}

export default App;
