const Donate = require('../models/donateModel');

const donateFood = async(req, res) => {
try{
  const {phone,address,city,pincode,foodType,quantity,duration,image,preferredTime} = req.body;
  const donation = new Donate({
    userId: req.user.id,
    phone,address,city,pincode,foodType,quantity,duration,image,preferredTime
  })
  await donation.save();
  res.status(201).json(donation);
}
catch(error){
    res.status(500).json({message: error.message})
}
}

module.exports = {donateFood}