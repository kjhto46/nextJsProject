'use client'

import { useState } from "react"

export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛']
    let [수량, 수량번경] = useState(0) // state의 장점 state가 변경되면 state 쓰는 html부분도 자동으로 변경됨
    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
          상품.map((a, i)=> {
              return (
                <div className="food" key={i}>
                  <img src={`/food${i}.png`} alt={상품[i]} className="food-img"/>
                  <h4>{상품[i]} $40</h4>
                  <span>{수량}</span>
                  <button onClick={() =>{수량번경(수량+1)}}>+</button>
                </div>
              )
          })
        }
      </div>
    )
}
  