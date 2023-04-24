import {age, name} from "./data"
export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    )
}
//component 반복으로 만들기 //component 단점으로는 서로 데이터 공유가 복잡함 재사용이 잦은 html 덩어리를 쓰기 좋음
//component 만드는 법
//1. function 작명(){}
//2. return (축약할 긴 HTML)
//3. <작명/> 사용

//Next.js 컴포넌트는 종류가 2개임. 1. server component 2. client component
//별도의 큰 조건없이 만든 component는 server component
//파일 제일 상단에 'use client' 넣고 만드는건 client component
//둘의 차이점은 1. server component 는 html에 자바스크립트 기능 넣기 불가능, (onclick ={} 이런것도 안됨, useState, useEffect 등)도 사용 불가능
// 2. client component는 html에 자바스크립트 기능넣기 가능 (useState, useEffect 등 사용 가능)
// 실제로 client component가 좋은거니 많이 쓰면된다. server component는 로딩속도가 더 빠르다는 장점이 있다.

//client component는 로딩속도 느림 
//1 (읽는데 자바스크립트가 많이 필요함) 
//2. 로딩속도 느림(hydration 필요) hydration html 유저에게 보낸 후에 자바스크립트로 html 다시 읽고 분석하는 일
function CartItem(){
  return (
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}