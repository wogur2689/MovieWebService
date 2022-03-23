import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  console.log("call an api"); //state가 변화할 때 모든 컴포넌트는 다시 실행되고 api호출은 처음 변화할때 한번만 하고싶은경우 해결방법은?
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
