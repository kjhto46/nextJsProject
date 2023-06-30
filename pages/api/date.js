export default function handler(req, res){

   if (req.method == 'GET') {
      let now = new Date();
      return res.status(200).json(now);
   }
}