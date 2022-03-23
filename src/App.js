import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

//state가 변화할 때 모든 컴포넌트는 다시 실행되고 api호출은 처음 변화할때 한번만 하고싶은경우 해결방법은?
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  console.log("i run all the time"); 
  const iRunOnlyOnce = () => {
    console.log("i run only once")
  }
  useEffect(iRunOnlyOnce, []); //
  useEffect(() => {
    console.log("CALL THE API....");
  }, []); //useEffect는 코드가 딱 한번만 실행될 수 있게 보호함.
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
