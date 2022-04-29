import { useState, useEffect } from "react";
import SingleCard from "./components/SingleCard";

const images = [
	{
		src: "/img/scroll-1.png",
		back: "/img/cover.png",
		filp: false,
	},
	{
		src: "/img/sword-1.png",
		back: "/img/cover.png",
		filp: false,
	},
	{
		src: "/img/shield-1.png",
		back: "/img/cover.png",
		filp: false,
	},
	{
		src: "/img/helmet-1.png",
		back: "/img/cover.png",
		filp: false,
	},
	{
		src: "/img/ring-1.png",
		back: "/img/cover.png",
		filp: false,
	},
];

function App() {
	let shuffuled = [...images, ...images]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random() }));
	const [cards, setCards] = useState(shuffuled);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	const start = () => {
		setCards(shuffuled);
	};

	const handleClick = (value) => {
		choiceOne ? setChoiceTwo(value) : setChoiceOne(value);

		if (choiceOne === choiceTwo) {

		}
	};
	return (
		<div className="text-red-300">
			<header className="shadow container py-3">
				<h3 className="d">Memory Game</h3>
				<button onClick={start}>New Game</button>
			</header>
			<div className="grid grid-cols-5 justify-center space-5">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						{...card}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
