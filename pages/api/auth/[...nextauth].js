import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// 우선 여기서 부터 시작된다. 'pages/api/auth/[...nextauth].js' 이 경로가 next-auth가 요구하는 기본값의 위치라고 한다. 
// 이곳에 작성하는 providers는 auth의 정보값 즉 아이디나 비밀번호를 입력한다. // !! https://next-auth.js.org/ 자세한 내용은 여기
// 우선은 깃허브가 가장쉬우니 여기로 연결을 했고 이는 가장 상위 layout.js에 작성한다(이유 그냥 gnb라서)

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'd52018718b895af4729f',
      clientSecret: '0ab67d506f37bedc859d53f9cfe540fc7c5bd1f0',
    }),
  ],
  secret : 'razritonykjh',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 