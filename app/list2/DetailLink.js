'use client'

import { usePathname, useRouter, useSearchParams, useParams } from "next/navigation"

export default function DetailLink(){
   let router = useRouter()
   // useRouter를 import 해오는데 이는 "next/navigation"이 올바른 경로 값이다.
   let a = usePathname() // 현재 URL을 출력해볼수 있음.
   let b = useSearchParams() // 현재 SearchParams 가 다 출력됨 '쿼리 스트링'이라고도 함
   let c = useParams() // 유저가 [dynamic route] 입력한거 출력함.
   return(
      <button onClick={()=>{router.push('/list')}}>버튼</button>
      )
      // router.back() 뒤로가기

      // router.forward() 앞으로가기

      // router.refresh() 새로고침 근데 페이지를 처음부터 다시 로드하는게 아니라 이전과 바뀐점을 분석해서 바뀐부분만 새로고침해준다고 합니다. Next.js 공식문서에선 soft refresh라고 부릅니다. 

      // 재밌는점은 router.prefetch('/어쩌구') 실행하면 '/어쩌구'의 내용을 미리 로드해줍니다 그럼 그 페이지 방문할 때 매우 빠르게 방문할 수 있습니다.
}