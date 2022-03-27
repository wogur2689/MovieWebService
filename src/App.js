import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function destroyedFn() {
    console.log(" bye :("); //컴포넌트 삭제시 출력
  }
  function hiFn() {
    console.log(" hi :)"); //컴포넌트 생성시 출력
    return byFn;
  }
  useEffect(hiFn, []);


  useEffect(() => {
    console.log("I'm here!"); //컴포넌트가 생성과 삭제가 진행되기 때문에 함수가 실행될때마다 useEffect를 해도 콘솔이 출력됨.
  },[]);
  useEffect(() => {
    console.log("created :)"); //컴포넌트 생성시 출력
    return () => console.log("destoryed :("); //컴포넌트 삭제시 출력
  },[]);
  return (<h1>Hello</h1>);
}

//state가 변화할 때 모든 컴포넌트는 다시 실행되고 api호출은 처음 변화할때 한번만 하고싶은경우 해결방법은?
function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setValue] = useState(0); //버튼 클릭횟수
  const [keyword, setKeyword] = useState(""); //검색 내용

  const click = () => setShowing((prev) => !prev);

  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time"); 
  const iRunOnlyOnce = () => {
    console.log("i run only once")
  }
  useEffect(iRunOnlyOnce, []); 
  useEffect(() => {
    console.log("CALL THE API....");
  }, []); //useEffect는 코드가 딱 한번만 실행될 수 있게 보호함. []을 쓸경우.
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) { //검색창에 5자이상 적어야 검색.
      console.log("SEARCH FOR", keyword); 
    }
  }, [keyword]); //이렇게 하면 keyword가 변화할때마다 실행됨.
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); //이렇게 하면 counter이 변화할때마다 실행됨.
  useEffect(() => {
    console.log("I run when 'keyword' and 'counter' changes.");
  }, [keyword, counter]); //이렇게 하면 counter나 keyword 둘중 하나만 변화해도 실행됨.
  //console.log("SEARCH FOR", keyword); //이대로 작성하면 검색할때만 변화하는것이 아닌 카운트가 올라갈때도 출력됨.
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <hr></hr>
      {/*버튼을 클릭하면 보여줌.*/}
      {showing ? <Hello/> : null}
      <button onClick={click}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
