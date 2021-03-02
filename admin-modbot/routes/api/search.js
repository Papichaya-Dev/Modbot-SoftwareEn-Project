// import User from "../models/user";
// export default async function(req, res) {
//    let query = req.body.query;

//    if (!query) {
//      return res.status(200).json([]);
//    }
//    const users = await User.aggregate([
//      {
//        $searchBeta: {
//          search: {
//            query,
//            path: ["name", "surname"],
//            phrase: {
//              prefix: true
//            }
//          }
//        }
//      }
//    ]);

//    return res.status(200).json(users);
//  }