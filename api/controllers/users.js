
import User from "../model/User.js"

export const updateUser = async(req,res,next)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true}); // new :true use after updating it send a newer version of the document in the postman
        res.status(200).json(updateUser)
       }catch(err){
           next(err)
       }
   
}
export const deleteUser = async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  export const getUsers = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const user = await User.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
    