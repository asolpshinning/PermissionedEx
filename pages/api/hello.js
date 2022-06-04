// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import loadStdlib from "@reach-sh/stdlib";
import Database from "@replit/database"
const Db = new Database();

export default async(req, res) => {

  //let acc1 = req.body;
  let ctcStatus = req.body.deployed
  await Db.set("ctcStatus", ctcStatus);
  let testing = await Db.get("ctcStatus");
  await console.log(`It is ${testing} that contract has been deployed`);

  res.status(200).json(testing)
}
