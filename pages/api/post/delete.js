import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let session = await getServerSession(req, res, authOptions);

    const db = (await connectDB).db("forum");
    let idMatch = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

    if (idMatch.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });

        return res.status(200).json({ message: '삭제완료' })
    } else {
      return res.status(500).json({ message: '유저와 작성자 불일치' });
    }
  }
}
