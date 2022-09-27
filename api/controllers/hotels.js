import Hotel from "../model/Hotel.js"

export const createHotel = async(req,res,next)=>{

    const newHotel = new Hotel(req.body)
    try{
     const saveHotel = await newHotel.save()
     res.status(200).json(saveHotel)
    }catch(err){
       next(err)
    }

}
export const updateHotel = async(req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true}); // new :true use after updating it send a newer version of the document in the postman
        res.status(200).json(updateHotel)
       }catch(err){
           next(err)
       }
   
}
export const deleteHotel = async (req, res, next) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getHotel = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
  };
  export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };
    