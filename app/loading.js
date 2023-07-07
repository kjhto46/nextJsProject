export default function loading(){
   return(
      <h4>로딩중!!!!!</h4>
      )
}

// next.js에서 기본으로 지원하는 loading.js 이것은 page.js를 불러올때 로딩이 생길경우 먼저 보여준다.
// 작동원리 
// !! <Suspense fallback={<div>로딩중</div>}> ⇐ fallback안에 있는 걸 먼저보여줌
// !! <div>보여줄페이지</div> ⇐ 이페이지가 로드되기전에 
// !! </Suspense>