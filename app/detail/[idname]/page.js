import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: new ObjectId("645907839d60790e828d44ee") });
  console.log(result);
  return (
    <div>
      <h2>상세페이지</h2>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
