import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
   let session = await getServerSession(req, res, authOptions) 
   req.body = JSON.parse(req.body);

 
   if (req.method == 'POST'){ 
      // 저장할 object자료를 작성해보자
      let dataToSave = {
         content : req.body.comment,
         parent : new ObjectId(req.body.detail_id),
         author : session.user.email
      }

      let db = (await connectDB).db('forum')
      let result = await db.collection('comment').insertOne(dataToSave);
      res.status(200).json(result)
   }
}
