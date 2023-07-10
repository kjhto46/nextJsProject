import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
   // console.log(request.nextUrl) // 유저가 요청중인 URL
   // console.log(request.cookies) // 유저의 쿠키
   // console.log(request.headers) // 유저의 headers 정보 (-이전방문페이지, 사용중인OS, 브라우저, 선호하는 언어, -IP, 쿠키 등등)
   //!! 상단에 2개는 map자료형이기때문에 
   // console.log(request.headers.get('')) //get으로 자료명을 작성해야함
   
   // !!!!! middleware 기능 마지막엔 이거 써줘야함
   // NextResponse.next() // 확인 이후 통과하라는 뜻
   // NextResponse.redirect() // 다른페이지로 강제이동 (주소창도 강제이동)
   // NextResponse.rewrite() // 다른페이지로 강제이동 (주소창은 그대로 둠)

   // 로그인을 안하고 작성 기능을 사용하려고 할때? 로그인페이지로 보내기
   const session = await getToken({req : request}) //auth에서 제공하는 기능중 하나 JWT일때만 사용 가는 session일 경우에는 안됨
   console.log(session)
   // if(request.nextUrl.pathname.startsWith('/write')){
   //    if(session == null) {
   //       return NextResponse.redirect('https://next-js-project-six-azure.vercel.app/api/auth/signin')
   //    }
   // }

   //예시 누군가가 /list 페이지로 이동하면 정보를 터미널에 보여줘라~
   if(request.nextUrl.pathname.startsWith('/list')){
      console.log(new Date())
      console.log(request.headers.get('sec-ch-ua-platform'))
      return NextResponse.next() // 별일 없으니 list페이지 로딩 계속 해주세요~
   }
}