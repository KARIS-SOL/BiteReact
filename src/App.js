import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "Karis",
    content: "Hello",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "Tom",
    content: "I wonder why",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "Mindi",
    content: "I my me mine",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

//diaryList 를 props 로 전달

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}
export default App;
