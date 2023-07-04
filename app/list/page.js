import { connectDB } from "@/util/database";
// import Link from "next/link";
import ListItem from "./ListItem";
// import DetailLink from "./DetailLink";
// detailLink에 useRouter에 대한 내용 저장함. useRouter은 Link와 다르게 자바스크립트 코드로 페이지를 이동시켜줄 수 있음.

export const dynamic = 'force-dynamic' //dynamic이라는 예약된 변수명이 있음. force-dynamic으로 항상 dynamic으로 보여주게 함 ,, 반대로 force-static이라고 하면 항상 static으로 보여줌 

// !! dynamic렌더링은 서버나 DB에 부담기능이 조금있음 따라서 캐싱 기능을 사용할 수 있음. 캐싱이란 GET요청 결과를 잠깐 다른곳에 저장해두고 그거를 재사용한다는 뜻 
// await fetch('/URL', {cache : 'force-cache'}) // 이방법으로 get요청 결과를 캐싱가능 
// await fetch('/URL', {cache : 'no-store'}) // 이러면 /URL 로 접근할때마다 매번 서버로 요청해서 새것을 가지고 옴
// await fetch('/URL', {next : {revalidate : 60}}) // 이러면 이 '/URL'로 요청할때 캐싱을 해주는데 60초동안 캐싱된 데이터 보여줌. 60초 이후에는 다시 캐싱된 데이터를 보여줌.

// !! 우리는 근데 DB를 사용하고 있는데 DB의 출력 결과는 캐싱이 가능한가? 당연히 가능하다 2가지 방법이 있음.
// !!! 방법 1 db 관련 작업을 API로 만든후 await fetch('/URL') 할때 /URL로 연결하기
// !!! revalidate라는 예약변수를 사용하면 페이지 단위 캐싱이 가능하다.
// !!!! export const revalidate = 20 이렇게 작업하면 20초초동안 캐싱을 해준다.

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result = result.map(item => ({
    ...item,
    _id: item._id.toString()
  }));
  //위 코드에서는 result.map 메서드를 사용하여 result 배열의 각 요소를 순회하면서 _id를 문자열로 변환합니다. 변환된 _id를 다시 할당한 후, result 배열을 ListItem 컴포넌트에 전달합니다.

  // 이렇게 하면 _id 필드를 문자열로 변환하여 클라이언트 측에서 사용할 수 있게 됩니다. 이 코드를 사용하면 경고 메시지가 해결되고, 클라이언트 컴포넌트에 올바른 값이 전달될 것입니다.

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
  //  Link에서는 자동으로 미리 로드해주는 prefetch기능이 있다. 하지만 링크가 많은 게시판의 경우 모든 링크를 다 읽을게 아닌데 모든걸 미리 로드하는 것은 자원낭비이다. {개발중일때는 확인 불가능 나중에 사이트 발행하면 확인 가능하다고 하네요} 
}