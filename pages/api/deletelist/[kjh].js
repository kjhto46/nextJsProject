import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    console.log(req.query.kjh);
    let db = (await connectDB).db("forum");
    let result = db.collection("post").deleteOne({ _id: new ObjectId(req.query.kjh) });
   res.redirect(200, '/list');
}
