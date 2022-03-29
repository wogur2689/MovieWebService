import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if(todo === "") {
      return;
    }
    setToDo(""); //state는 직접적으로 수정 X
    setToDos((currentArray) => [toDo, ...currentArray]) //새로운 배열 리턴
  }

  return (
    <div> 
      <h1>My To Dos ({toDos.length})/</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
