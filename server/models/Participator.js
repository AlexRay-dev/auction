import mongoose from 'mongoose';

export const ParticipatorSchema = new mongoose.Schema({
  name: String,
  measuresThatRaisingQuality:  Boolean,
  productionTime: String,
  guarantee: String,
  payment: String,
  price: Array,
  actions: String,
});