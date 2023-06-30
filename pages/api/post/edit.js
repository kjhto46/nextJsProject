import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
   if (req.method == 'POST') {

      let changeArray = {
         title: req.body.title,
         content: req.body.content
       }

      let db = (await connectDB).db('forum');
      let result = db.collection('post').updateOne(
         {_id : new ObjectId(req.body._id)},
         {$set : changeArray}   
      )
      console.log(result)
      res.redirect(302, '/list')
   }
}

// document 수정은 updateOne()을 사용한다.
// .updateOne({수정할 게시물 정보}, {$set : {title : '수정할 값', content : '수정할 값'}})
