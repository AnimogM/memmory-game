import { useGlobalContext } from "../context";

const SingleCard = ({ card, flip }) => {
  const { disabled, handleChoice } = useGlobalContext();
  const handleChange = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="flex flex-col relative">
      <img
        className={`img absolute ${flip ? "relative rotate-0" : " rotateY"}`}
        src={card.src}
        alt="font"
      />
      <img
        onClick={handleChange}
        className={`img ${flip ? " rotateY absolute" : ""} ${
          disabled ? "" : "cursor-pointer"
        }`}
        src={card.back}
        alt="back"
      />
    </div>
  );
};

export default SingleCard;
