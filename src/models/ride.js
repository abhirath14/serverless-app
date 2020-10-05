const {Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rideSchema = new Schema({
  status: {
    type: String,
    enum: ['COMPLETED', 'IN PROGRESS', 'NOT STARTED'],
    default: 'NOT STARTED'
  },
  riderId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  numberOfRiders: {
    type: Number,
    required: true
  },
  sourceCoordinates: {
    x: {
      type: Decimal128,
      required: true
    },
    y: {
      type: Decimal128,
      required: true
    }
  },
  destinationCoordinates: {
    x: {
      type: Decimal128,
      required: true
    },
    y: {
      type: Decimal128,
      required: true
    }
  },
  bookingTime: {
    type: Date,
    required: true
  }
});
module.exports = mongoose.model('Ride', rideSchema);