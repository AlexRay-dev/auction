import Auction from '../models/Auction.js';

class AuctionsService {
  async getAll() {
    return (await Auction.find());
  }

  async getOne(id) {
    return (await Auction.findById(id));
  }
}

export default new AuctionsService();