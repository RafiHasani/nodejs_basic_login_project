const Products = require("../../schemas/schema_product.js");

const getProducts = async (req, res) => {
  const body = req.body;

  const pagination = body.pagination;
  let productList = [];

  if (pagination && pagination.page > 1) {
    productList = await Products.find()
      .limit(pagination.perpage)
      .skip(pagination.page * pagination.perpage)
      .exec();
  } else {
    productList = await Products.find()
      .limit(pagination.perpage)
      .skip(0)
      .exec();
  }

  if (productList) {
    res.json({
      statusCode: 200,
      data: productList,
      message: "Products data load successfull.",
      error: null,
      state: "OK",
      pagination: {
        page: pagination.page,
        perpage: pagination.perpage,
        count: productList.length,
        sort: pagination.sort,
      },
    });
  } else {
    res.json({
      statusCode: 400,
      data: null,
      message: "Something went wrong!",
      error: "Error",
      state: ok,
    });
  }
};

module.exports = { getProducts };
