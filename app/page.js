import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb'

export const revalidate = 60; // !! 누가 페이지 방문시 60초동안 캐싱됩니다.

export default async function Home() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  // await fetch('/URL', {cache : 'force-cache'}) // !! '/URL'에 결과 몰래 저장해두고 그거를 사용함
  // await fetch('/URL') !! 주의 이렇게만 적어도 캐싱 됩니다. GET 요청 켤과 캐싱가능 fetch가 기본적으로  {cache : 'force-cache'} 이게 채워져서 작성됨
  
  // await fetch('/URL', {cache : 'no-store'}) // !! cache은 안하고 매번 서버로 요청해서 새거 가져옴
  // await fetch('/URL', {next : {revalidate : 60}}) // !! 이러면 60초마다 캐싱된 데이터 갱신해줌

  return (
    <div>안녕</div>
  )
}
