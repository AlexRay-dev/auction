import mongoose from 'mongoose';
import {ParticipatorSchema} from "./Participator.js";

const AuctionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startedAt: {
    type: Number,
    required: true,
  },
  participators: {
    type: [ParticipatorSchema],
  }
}, {
  capped: { size: 1024 },
  bufferCommands: true,
  autoCreate: false // disable `autoCreate` since `bufferCommands` is false
});

export default mongoose.model('Auction', AuctionSchema);