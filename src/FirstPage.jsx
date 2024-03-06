import SpaceBackground from "./SpaceBackground";
import Banner from "./Banner";
import FormControl from "./FormControl";

const FirstPage = () => {
  return (
    <>
      <div className="container">
        <SpaceBackground />
        <div className="stars-container">
          <Banner />
        </div>
        <FormControl />
      </div>
    </>
  );
};
export default FirstPage;
