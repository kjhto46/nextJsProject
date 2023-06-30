import { connectDB } from "@/util/database"

export default async function handler(req, res) {
  // console.log(req.body); 하면 [Object: null prototype] {title:'어쩌구', content: '저쩌구'}
  //이런식으로 보일것이다.
  if (req.method == 'POST'){ // post method일때~ 이렇게 해주세요~ 라고 엄격하게 제어
    if (req.body.title == '') {
      return res.status(500).json('제목써줘')
    }
    if (req.body.content == '') {
      return res.status(500).json('내용입력해줘')
    }

    try {
        let db = (await connectDB).db('forum')
        let result = db.collection('post').insertOne({
            title:req.body.title,
            content:req.body.content
        });
        res.redirect(302, '/list')
    } catch (error) {
        console.log(error)
    }
  }
} 
// insertOne() object 자료형 데이터를 () 안에 입력하면 그것을 하나 저장해준다.
// collection('post').insertOne({}) 카테고리 명 'post' 라는 곳에 데이터를 하나 저장해준다는 뜻~