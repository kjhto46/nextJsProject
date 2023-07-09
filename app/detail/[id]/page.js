import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { notFound } from "next/navigation";

// dynamic route 문법을 사용하여 아이디값에 따라 다른 url이여도 같은 page.js를 보이게 하였다
// 방법은 눈치 챘다시피 [id] 또는 [어쩌구] 하면된다.

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  if (result == null) {
    // id값과 일치하는 데이터가 없을때 404 보여주는 방식.
    // return <div>404 페이지가 존재하지 않습니다.</div> //이렇게 return을 직접써도 되지만 하단처럼 notFound()로 작업하면됨
    // !! notFound()가 되면 page.js 대신 not-found.js를 보여주는 함수이다. 이것도 주변에 없으면 상위 폴더에서 찾아서 한다.
    return notFound();
  }

  // console.log(props)  값이 { params: { id: '어쩌구저쩌구' }, searchParams: {} } 이렇게 나옴 props는 부모 componet 데이터 이외에도 dynamic route에 입력한 값을 출력하는것이다. 저기 id는 아이디라는 dynamic route에 '어쩌구저쩌구'가 됐다~ 이렇게 된것이다.
  return (
    <div>
      <h2>상세페이지</h2>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      {result.img_url && <img src={result.img_url} alt={result.title} />}
      <Comment detail_id={result._id.toString()} />
    </div>
  );
}
