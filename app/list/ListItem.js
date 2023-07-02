"use client";

import Link from "next/link";

// import { useEffect } from "react";

export default function ListItem({ result }) {
  // useEffect(() => {
  // // !서버에 부탁해서 DB게시물 부탁해서 가져옴 예를 들어 get요청
  // // result = DB게시물
  // // !이런식으로 짤수가 있음 하지만 여기는 'use client'를 사용한 [client component] 따라서 검색노출이 어렵다..
  // },[]) // !useEffect()는 HTML부터 유저에게 보여주고 그다음에 실행된다. 그런 방식때문에 검색노출이 어려움

  // !!!!!따라서 우리는 props로 result를 부모 component에서 가져온다.

  // props.result로 작성을 했었지만 props를 쉽게 쓰는 법이 있었으니~~
  //  `ListItem(props) {` 이렇게 작성된것을 `ListItem({result}) {` 이렇게 하여 result라는 함수를 props로 불러온것으로 지정 !!! 자세한 건 destructuring 문법 찾아보기
  return (
    <div>
      {result.map((a, i) => (
        //return을 하지 않은 이유 , 원래 화살표함수에서 () => {}, ()함수가 return() 하나밖에 없기때문에  () => () 해서 return이 생략 되었다. 쉽게 말해 {} 중괄호와 return을 생략하였다고 보면된다
        <div className="list-item" key={i}>
          <Link prefetch={false} href={"/detail/" + result[i]._id}>
            <h4>{result[i].title}</h4>
            <p>{result[i].content}</p>
          </Link>
          <Link href={"/edit/" + result[i]._id}>수정</Link>

          <span
            onClick={(e) => {
              // !! 방법 1.  console.log(result[i]._id);
              // !! 방법 1.  fetch("/api/post/delete", {
              // !! 방법 1.    method: "POST",
              // !! 방법 1.    body: result[i]._id, //'이방법으로 데이터를 보내줄수도 있다'
              // !! 방법 1.  })
              // !! 방법 1.    .then((r) => {
              // !! 방법 1.      if (r.status == 200) {
              // !! 방법 1.        return r.json();
              // !! 방법 1.      } else {
              // !! 방법 1.        //서버가 에러코드전송시 실행할코드
              // !! 방법 1.      }
              // !! 방법 1.    })
              // !! 방법 1.    .then((result) => {
              // !! 방법 1.      //성공시 실행할코드
              // !! 방법 1.      e.target.parentElement.style.opacity = 0;
              // !! 방법 1.      setTimeout(()=>{
              // !! 방법 1.         e.target.parentElement.style.display = 'none';
              // !! 방법 1.      },1000)
              // !! 방법 1.    })
              // !! 방법 1.    .catch((error) => {
              // !! 방법 1.      //인터넷문제 등으로 실패시 실행할코드
              // !! 방법 1.      console.log(error);
              // !! 방법 1.    }); // then().then()으로 respone에 받아온 값을 넘겨 받을 수 있는 개념이다.

              // 방법 2. query string 과 URL parameter을 사용해서 할수있다.
              // !! URL뒤에 ? 데이터이름= 값 입력가능(query string)
              // !! ex. ('/api/test?name=kim') 이후 /api/test에서 console.log(req.query) 시 {name:'kim'} 이라는 값을 확인 할 수 있음
              // !!! query string 장점 간단함, get 요청에서 별도의 body: result[i]._id, 이 단계가 필요없이 데이터 전송가능
              // !!! 단점 데이터가 길고 복잡하면 지저분함. 민감한 정보를 입력하면 보안에 취약함.
              fetch(`/api/deletelist/${result[i]._id}`)
                .then((r) => {
                  if (r.status == 200) {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);

                    return r.json();
                  } else {
                    // 서버가 에러코드 전송시 실행할 코드
                  }
                })
                .catch((error) => {
                  // 인터넷문제 등으로 실패시 실행할 코드
                  console.log(error);
                });
            }}
          >
            삭제
          </span>
        </div>
      ))}
    </div>
  );
}
