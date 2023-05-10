import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail" + result[i]._id}>
            <h4>{result[i].title}</h4>
            <p>{result[i].content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
