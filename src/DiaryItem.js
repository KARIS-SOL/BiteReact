// DiaryList 의 배열에 배열대신 DiaryItem 을 연결함
// console 창에서 const DiaryItem = ({}) 에 들어가는 prop을 찾아서 전달
const DiaryItem = ({ author, content, created_date, emotion, id }) => {
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
    </div>
  );
};

export default DiaryItem;
