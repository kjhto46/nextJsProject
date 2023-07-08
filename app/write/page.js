"use client";

import { useState } from "react";

export default function Write() {

   let [src, setSrc] = useState('')

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            let filename = encodeURIComponent(file.name); // encodeURIComponent 파일명이 국문이거나 언어가 다를때 안전하게 저장하려구
            let res = await fetch("api/post/image?file=" + filename);
            res = await res.json();

            //S3 업로드
            const formData = new FormData();
            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
              formData.append(key, value);
            });
            let 업로드결과 = await fetch(res.url, {
              method: "POST",
              body: formData,
            });
            console.log(업로드결과);

            if (업로드결과.ok) {
              setSrc(업로드결과.url + "/" + filename);
            } else {
              console.log("실패");
            }
          }}
        />
        <img src={src} />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
  //form에서 submit 버튼을 눌렀을때 서버에 글을 보낸 후 서버는 db에 글을 저장함.
  // 나는 /api/post/new 로 action이 들어가면서 저기가 서버의 역활을 함
}
// !! <input type="file" accept="image/*"/> 이미지 넣기 이건 뭐 당연한거고
// !! 선택한 이미지를 바로 미리보여주기 식으로 보여주려면
// !! 1. createObjectURL을 사용하거나 2. input에 올리는 순간 DB에 올려서 바로 보여주게 하기
// !! 여기서 작업할 방식은 2번으로 하겠다. 2번으로 하면
// !!! '유저 ⇒ 서버 ⇒ S3'  라서 비효율적이지 않나요?? ❌ 요즘은 Presigned URL 방식을 사용해서 '유저 ⇒ S3' 하는 경우가 더 많아짐
