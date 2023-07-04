"use client";

import { signOut } from 'next-auth/react'
// 반대로 signOut 라는 함수도 있음

export default function LogOutBtn() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >로그아웃</button>
  );
}
