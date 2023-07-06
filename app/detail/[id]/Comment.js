"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState(""); // ('') 기본값이 공란이라는 뜻
  let [data, setData] = useState([])

  // client component 로드시 서버에 데이터 요청하려고 fetch()를 사용할건데
  // 보통 useEffect라는 곳 안에 적어야한다. html이랑은 상관없는 코드를 ajax, 타이머 이런 기능을 넣을때 보통 보관한다.
  // !?! 이상한 특징 1. 으로는 useEffect 안에 적은 코드는 html이 로드/재렌더링 될때마다 실행된다.
  // ^ 위에 글 해결법   useEffect(() => {},[])      //[] 를 추가함으로써 export default function Comment(props) { 이 한번 로드될때 1회만 실행된다.
  // !?! 이상한 특징 2. seEffect 안에 적은 코드는 html 렌더링 후에 실행됩니다 //그래서 위의 예제는 컴포넌트의 html 부터 보여주고 나서 ajax도 실행되는데 나쁜건 아닙니다.
  useEffect(() => {
    fetch("/api/comment/list?id=" + props.detail_id)
      .then((r) => r.json())
      .then((result) => {
         // console.log(result)
         setData(result)
      });
  }, []);

  return (
    <div>
      <ul>댓글목록보여줄부분
      {
      data.length > 0 ?
         data.map((a,i)=>(
               <li key={i}>
                  <p>{a.content}</p>
               </li>
               )
         )
         : <li>로딩중</li>
      }
      </ul>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              detail_id: props.detail_id,
            })
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
//react에서는 보통 유저가 input에 입력한 값을 state에 저장해두고 그것을 서버로 전송하는 패턴이 많다. (form을 사용하면 새로고침이 되니까)
// !! 그것이 useState();
// !! input에 onChange={() =>{}}는 input에 값이 입력될때마다 안에 있는 코드가 실행됨. e.target.value은 이름그대로 값을 인식함.
//
