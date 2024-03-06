import { Link } from "react-router-dom";

const Item = ({ name, id }) => {
  return (
    <Link to={`/star/${id}`}>
      <div className="item">
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
    </Link>
  );
};
export default Item;
