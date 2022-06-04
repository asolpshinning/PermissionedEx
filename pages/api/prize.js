// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import loadStdlib from "@reach-sh/stdlib";
import Database from "@replit/database"
const Db = new Database();

export default async(req, res) => {

  //let acc1 = req.body;
  let prize = req.body.prize
  await Db.set("prize", prize);
  let prizeSaved = await Db.get("prize");
  await console.log(`...${prizeSaved} has been saved in database`);

  res.status(200).json(prizeSaved)
}
