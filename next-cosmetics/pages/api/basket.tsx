import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    /*
 	데이터베이스 처리
	*/
    res.status(200).json({ message: "Change basket qty successed" });
    return;
  } else if (req.method === "DELETE") {
    /*
 	데이터베이스 처리
	*/
    res.status(200).json({ message: "Delete basket Item successed" });
    return;
  }
  res.status(400).json({ message: "Method not exist" });
};
