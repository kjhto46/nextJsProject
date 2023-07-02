import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    let db = (await connectDB).db("forum");
    let result = db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
    res.redirect(200, "/list");
  }
}
