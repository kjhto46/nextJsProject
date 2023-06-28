import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => ( //return을 하지 않은 이유 알아보긴
        <div className="list-item" key={i}>
          <Link prefetch={false} href={"/detail/" + result[i]._id}>
            <h4>{result[i].title}</h4>
            <p>{result[i].content}</p>
          </Link>
          <DetailLink></DetailLink>
        </div>
      ))}
    </div>
  );
}
