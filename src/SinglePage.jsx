import SpaceBackground from "./SpaceBackground";
import { useParams } from "react-router-dom";
import { data } from "./data";

const SinglePage = () => {
  const { id } = useParams();

  const person = data.find((star) => star.id === id);

  const { id: userId, name, link, description } = person;

  return (
    <main className="single-person">
      <SpaceBackground />
      <div className="top-star">
        <h3>звезда:</h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,0 63,38 100,38 69,62 81,100 50,75 19,100 31,62 0,38 37,38"
            fill="gold"
          />
        </svg>{" "}
        <p>{name}</p>
      </div>
      <article>
        <p className="desc">{description}</p>
      </article>
      <p>Продолжение поздравления по ссылке {":)"}</p>
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        ссылка на встречу
      </a>
    </main>
  );
};
export default SinglePage;
