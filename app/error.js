"use client";
// 에러 또한 자동으로 되는 부분이 있음. 물론 if문과 return으로 작성하는게 일방적이지만
// next.js에서도 자동 지원함. 이 폴더의 page.js에서 에러가 나면 error.js가 보여지게 되는 방식임

// ! 이방식의 장점은 page.js부분만 error.js로 바꿔주기 때문에 다른 u들이 남아있다. (참고 error.js가 없에 없으면 상위폴더들을 뒤진다. 그래서 상위에둬도 괜찮다.)
// ! 따라가 가장 밖에 해도 문제가 없다면 그렇게 해도 된다.

// !! props 를 사용할 수 있음 2가지의 데이터가 들어옴 error랑 reset이라는것이 들어옴
// !! props.error 이런식으로 작성하기 귀찮으면 아래처럼 작성해도 됨
export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러났어요</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset 버튼 실행시 페이지 다시로드
      </button>
    </div>
  );
}

