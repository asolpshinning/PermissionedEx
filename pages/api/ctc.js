// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import loadStdlib from "@reach-sh/stdlib";
import Database from "@replit/database"
const Db = new Database();

export default async(req, res) => {
  let dummy = await req.body.title;
  let status = await Db.get("ctcStatus");
  let prize = await Db.get("prize")
  let sendBack = {status, prize}
  await console.log(`It is ${status} that contract has been deployed`);

  res.status(200).json(sendBack)
}
