import { useState } from "react";

// DiaryList 의 배열에 배열대신 DiaryItem 을 연결함

// console 창에서 const DiaryItem = ({}) 에 들어가는 prop을 찾아서 전달
const DiaryItem = ({
  onEdit,
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  // return 문 안에 모든게 다들어가있으면 가독성이 떨어지니깐 함수는 위로 올리고 retrun 문 안은 간결하게

  // 수정하기
  // 일단 상태변화가 일어나기때문에 useState 로 관리
  // 기본값이 false 인 이유 -> boolean 형태로써, true 가 되면 수정을 하는 순간이고, false 로 두면 그냥 버튼이 보이는상태
  const [isEdit, setIsEdit] = useState(false);
  // 수정버튼 누를시 -> toggle 함수가 실행되었을때 setIsEdit 이 실행되면서 반전이되는 함수 -> true에서 false , false 에서 true
  const toggleIsEdit = () => setIsEdit(!isEdit);
  // textarea 에 들어갈 input(하얀 Form) 을 관리할 함수
  // useState() -> 기본값으로 content 를 넣으면 수정전 글씨가 뜬다. -> localContent 의 값이 content 의 값이라고 생각하기.
  const [localContent, setLocalContent] = useState(content);

  // 수정할글씨를 작성하고 수정취소를 눌렀을 때, 원래 본문으로 돌아오고, 수정단계에서 썼던 다른 글씨들은 사라지게 -> 초기화
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  // 수정완료 함수  -> 궁극적으론 onEdit 을 수행해야함 -> App.js 에서 데이터가 수정이됨
  // 본문에서도 5글자 -> 수정할때도 5글자
  // 타겟인 Id 와 새로변경된 localContent 를 전달 ->
  const handleEdit = () => {
    if (localContent.length < 5) {
      return;
    }
  };
  // 삭제하기
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {/* 삭제버튼을 눌렀을때, App.js에서 data 의 배열이 삭제당한 것을 제외한 다른 배열들만 나오게 업데이트를 시켜줘야한다.
          삭제버튼을 눌렀을때, App.js 에 있는 Item 의 부모요소인 List 에 props 해주고 그 후에 다시 Item 에 props 를 해야함 */}
      {isEdit ? (
        <>
          {" "}
          <button onClick={handleQuitEdit}> 수정 취소</button>
          {/* React의 특성상 Event 는 아래에서 위로 가야하므로 '수정완료'에서 일어난 Event App.js 까지전달 되어아햠 -> 데이터를 가지고있는 App.js에서 
          수정기능을 갖는 함수를 만들어서 다시 데이터를 DiaryItem 까지 보내주어야한다.  */}
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={handleRemove}> 삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
