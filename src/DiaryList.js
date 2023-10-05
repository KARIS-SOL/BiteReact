import DiaryItem from "./DiaryItem";

// diaryList 가 props 로 받아서 들어옴 from App.js
// onRemove 를 받아서 DiaryItem 한테 내려줘야함 -> Props Drilling
// onEdit 을 App.js에서 props 로 받아서 DiaryItem 에 전달 해야함
const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  // 정상적으로 prop을 받았는지 확인 console
  // console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트 </h2>
      <h4>{diaryList.length}개의 일기가 있습니다. </h4>
      {/* 배열을 list로 렌더링하기  */}
      <div>
        {/* JSX 표현식 사용 */}
        {diaryList.map(
          (
            it // 배열의 하나하나의 요소가 바뀌어서 들어옴 from app Component
          ) => (
            // ...it에 들어있는 모든 아이템이 prop으로 전달됨
            <DiaryItem
              key={it.id}
              {...it}
              onEdit={onEdit}
              onRemove={onRemove}
            />
            // <div key={it.id}>
            //   <div>작성자 : {it.author}</div>
            //   <div>일기 : {it.content}</div>
            //   <div>감정 : {it.emotion}</div>
            //   <div>작성 시간(ms) : {it.created_date}</div>
            // </div>
          )
        )}
      </div>
    </div>
  );
};

// prop이 undefined 라는 값으로 받을 경우 default 값 정하기
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
