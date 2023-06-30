export default function Write(){
   return (
      <div className="p-20">
         <h4>글작성</h4>
         <form action="/api/post/new" method="POST">
            <input name="title" placeholder="글제목"/>
            <input name="content" placeholder="글내용"/>
            <button type="submit">버튼</button>
         </form>
      </div>   
   )
   //form에서 submit 버튼을 눌렀을때 서버에 글을 보낸 후 서버는 db에 글을 저장함.
   // 나는 /api/post/new 로 action이 들어가면서 저기가 서버의 역활을 함 
}