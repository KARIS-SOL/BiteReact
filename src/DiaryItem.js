// DiaryList 의 배열에 배열대신 DiaryItem 을 연결함
// console 창에서 const DiaryItem = ({}) 에 들어가는 prop을 찾아서 전달
const DiaryItem = ({
  onDelete,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      {/* 삭제버튼을 눌렀을때, App.js에서 data 의 배열이 삭제당한 것을 제외한 다른 배열들만 나오게 업데이트를 시켜줘야한다.
          삭제버튼을 눌렀을때, App.js 에 있는 Item 의 부모요소인 List 에 props 해주고 그 후에 다시 Item 에 props 를 해야함 */}
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        {" "}
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
