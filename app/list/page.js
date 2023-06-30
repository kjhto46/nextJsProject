import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
// detailLink에 useRouter에 대한 내용 저장함. useRouter은 Link와 다르게 자바스크립트 코드로 페이지를 이동시켜줄 수 있음.

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  // console.log(result);
  return (
    <div className="list-bg">
      {result.map((a, i) => ( 
        //return을 하지 않은 이유 , 원래 화살표함수에서 () => {}, ()함수가 return() 하나밖에 없기때문에  () => () 해서 return이 생략 되었다. 쉽게 말해 {} 중괄호와 return을 생략하였다고 보면된다
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
  //  Link에서는 자동으로 미리 로드해주는 prefetch기능이 있다. 하지만 링크가 많은 게시판의 경우 모든 링크를 다 읽을게 아닌데 모든걸 미리 로드하는 것은 자원낭비이다. {개발중일때는 확인 불가능 나중에 사이트 발행하면 확인 가능하다고 하네요} 
}
