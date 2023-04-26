'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛'];
    let [수량, 수량변경] = useState([100,2,0]); // state의 장점 state가 변경되면 state 쓰는 html부분도 자동으로 변경됨
    return (
      <div>
        <h4 className="title">상품목록</h4>

        {/* <span>{수량[0]}</span>
        <button onClick={()=>{ 
          let copy = [...수량]; [... 함수명] <= '독립적인 array를 만들어주세요' 라는 뜻
          copy[0]++; 복사하는 이유 react에서 state 변경 함수를 사용시 내부적으로 동작하는 로직이 있다. (새 state === 기존 state)면 변경을 하지 않는다.
          수량변경(copy);
         }}>+</button> */}

        {
          상품.map((a, i)=> {
              return (
                <div className="food" key={i}>
                  <img src={`/food${i}.png`} alt={상품[i]} className="food-img"/>
                  <h4>{상품[i]} $40</h4>
                  <span>{수량[i]}</span>
                  <button onClick={() =>{
                    let copy = [...수량];
                    copy[i]++;
                    수량변경(copy);
                  }}>+</button>
                  <button onClick={() =>{
                    let copy = [...수량];
                    copy[i]--;
                    수량변경(copy);
                  }}>-</button>
                </div>
              )
          })
        }
      </div>
    )
}
  