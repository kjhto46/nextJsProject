"use client";
import { useState } from "react";
const Write = () => {
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [src, setSrc] = useState("");
  const onFileUpload = async (e) => {
    e.preventDefault();
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      let image = window.URL.createObjectURL(file);
      setImageURL(image);
      setImageFile(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const filename = encodeURIComponent(imageFile.name);
    let res = await fetch("/api/post/image?file=" + filename);
    res = await res.json();
    //S3 업로드
    const formData = new FormData();
    Object.entries({ ...res.fields, file: imageFile }).forEach(
      ([key, value]) => {
        formData.append(key, value);
      }
    );
    let 업로드결과 = await fetch(res.url, {
      method: "POST",
      body: formData,
    });
    console.log(업로드결과);
    console.log("res.url,", res.url);
    console.log("res.fields,", res.fields);
    console.log("imageFile,", imageFile);
    setSrc(업로드결과.url + "/" + filename);
    if (업로드결과.ok) {
      console.log(업로드결과.url + "/" + filename);

      fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
          img_url: 업로드결과.url + "/" + filename,
        }),
      })
        .then()
        .then((window.location.href = "/list"));
    } else {
      console.log("실패");
    }
  };
  return (
    <div className="form-container">
      <h4 className="title">글작성페이지</h4>
      <form className="post-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          placeholder="글제목"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          value={content}
          placeholder="글내용"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={(e) => onFileUpload(e)} />
        {imageURL && (
          <img
            src={imageURL}
            alt="미리보기이미지"
            style={{ marginBottom: "1rem" }}
          />
        )}
        <button type="submit">글작성</button>
      </form>
    </div>
  );
};
export default Write;
