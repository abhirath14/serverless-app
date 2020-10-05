const Ride = require('../models/ride.js');
const User = require('../models/user.js');

exports.createRide = async (req, res, next) => {
  var riderName = req.body.riderName;
  var driverName = req.body.driverName;

  try {
    var riderId = await User.findOne({nickName: riderName});
    var driverId = await User.findOne({nickName: driverName});
    riderId = riderId.id;
    driverId = driverId.id;
  } catch(err) {
    console.log(err);
    return;
  }



  var sourceCoordinates = req.body.sourceCoordinates;
  var destinationCoordinates = req.body.destinationCoordinates;
  var numberOfRiders = req.body.numberOfRiders;
  var bookingTime = new Date(req.body.bookingTime);


  var ride = new Ride({
    riderId: riderId,
    driverId: driverId,
    sourceCoordinates: sourceCoordinates,
    destinationCoordinates: destinationCoordinates,
    numberOfRiders: numberOfRiders,
    bookingTime: bookingTime
  });

  ride.save().then(() => {
    console.log("Ride saved");
    res.status(200);
    res.json({message: "Ride saved"});
  }).catch(err => {
    res.status(500);
    res.json({message: "Unable to save a ride"});
    console.log({message: "Unable to save a ride"});
  });

}
exports.getFare = (req, res, next) => {
  var id = req.body.id;
  Ride.findOne({
    _id: id
  }).then(ride => {
    var fare = Math.sqrt(Math.pow(ride.sourceCoordinates.x - ride.destinationCoordinates.x, 2) + Math.pow(ride.sourceCoordinates.y - ride.destinationCoordinates.y, 2));
    res.json({message: "Fare calculated", fare: fare});
    res.status(200);
  }).catch(err => {
    res.json({err: err});
    res.status(500);
  });
}
exports.endRide = (req, res, next) => {
  var rideId = req.body.id;
  Ride.update({id: rideId}, {$set: {status: 'COMPLETED'}}).then((ride)=> {
    res.json({message: "Ride Ended"});
    res.status(200);
  }).catch(err => {
    res.status(500);
    res.json({message: "Ride could not be updated"});
  });
}
