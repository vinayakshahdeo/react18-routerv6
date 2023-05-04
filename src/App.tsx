import "./styles.css";
import IMAGE from "./react.png";
import ClickCounter from "./ClickCounter";
const App = () => {
  const name = "abc";
  return (
    <>
      <h1>Hello `${name}`</h1>
      <img src={IMAGE} alt="react logo" width="300" height="200" />
      <ClickCounter />
    </>
  );
};

export default App;
