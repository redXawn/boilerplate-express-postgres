const product = require('../server/models').product;
const { success, notFound, failed } = require('../utils/response');

module.exports = {
  async getProduct (req, res) {
    const allProduct = await product.findAll()
    success(req, res, allProduct)
  }
}