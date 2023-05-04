import "./styles.css";
import ClickCounter from "./ClickCounter";
const App = () => {
  const name = "vinayak shahdeo";
  return (
    <>
      <h1>Hello {name}</h1>
      <ClickCounter />
    </>
  );
};

export default App;
