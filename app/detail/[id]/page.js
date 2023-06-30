import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// dynamic route 문법을 사용하여 아이디값에 따라 다른 url이여도 같은 page.js를 보이게 하였다
// 방법은 눈치 챘다시피 [id] 또는 [어쩌구] 하면된다.

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h2>상세페이지</h2>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
