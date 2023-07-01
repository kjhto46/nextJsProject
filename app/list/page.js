import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";
// import DetailLink from "./DetailLink";
// detailLink에 useRouter에 대한 내용 저장함. useRouter은 Link와 다르게 자바스크립트 코드로 페이지를 이동시켜줄 수 있음.

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result);
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
  //  Link에서는 자동으로 미리 로드해주는 prefetch기능이 있다. 하지만 링크가 많은 게시판의 경우 모든 링크를 다 읽을게 아닌데 모든걸 미리 로드하는 것은 자원낭비이다. {개발중일때는 확인 불가능 나중에 사이트 발행하면 확인 가능하다고 하네요} 
}