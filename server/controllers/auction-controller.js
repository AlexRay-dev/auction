import ApiError from "../exceptions/apiError.js";
import AuctionsService from "../services/auctions-service.js";

class AuctionsController {
  async getAll(req, res, next) {
    try {
      const auctions = await AuctionsService.getAll();
      console.log(auctions)

      if (!auctions) {
        return next(ApiError.NotFound('No auction for this ID'));
      }
      res.status(200).json(auctions);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res, next) {
    try {
      const {id} = req.params;
      const auction = await AuctionsService.getOne(id);

      if (!auction) {
        return next(ApiError.NotFound('No auction for this ID'));
      }

      res.status(200).json(auction);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new AuctionsController();