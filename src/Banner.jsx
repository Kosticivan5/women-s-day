import TypingAnimation from "./TypingAnimation";
import robot from "./assets/robo.png";

const Banner = () => {
  const sentences = [
    "Привет, Дорогая девушка! ",
    "мужчины дко Поздравляют тебя с Международным женским днем !",
    "Набери свое имя или фамилию в поле внизу, чтобы найти себя,",
    "а затем перейди по карточке со своим именем.",
    "С праздником! \u2764 ",
  ];

  const typingSpeed = 80;
  return (
    <div className="banner">
      <h1 id="typing-text">
        <TypingAnimation sentences={sentences} typingSpeed={typingSpeed} />
      </h1>
      <div className="robo-girl">
        <div className="img-container">
          <img src={robot} alt="robo" />
        </div>
        <div className="hole"></div>
      </div>
    </div>
  );
};
export default Banner;
