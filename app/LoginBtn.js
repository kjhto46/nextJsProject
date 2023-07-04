"use client";

import { signIn } from 'next-auth/react'
// onClick을 위해 client component로 만들고 singIn 함수를 import하여 사용

export default function LoginBtn() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >로그인</button>
  );
}
