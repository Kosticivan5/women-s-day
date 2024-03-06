import { useEffect, useState, useRef } from "react";
import Item from "./Item";
import { data } from "./data";

const FormControl = () => {
  const [list, setList] = useState(data);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newList = data.filter((person) => {
      const { name } = person;
      return name.toLowerCase().includes(value.toLowerCase());
    });
    setList(newList);
  };

  useEffect(() => {
    handleChange();
  }, [value]);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the position of the form relative to the viewport
    const formPosition = formRef.current.getBoundingClientRect();

    // Calculate the target scroll position
    const targetPosition = window.scrollY + 100;

    // Smooth scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {" "}
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name="input"
          id="input"
          placeholder="Внесите свое имя или фамилию"
          spellCheck="false"
          autoComplete="off"
        />
      </form>
      <div className="item-container">
        {list.map((person, index) => {
          const { id, name } = person;
          return <Item key={id} name={name} id={id} />;
        })}
      </div>
    </div>
  );
};
export default FormControl;
