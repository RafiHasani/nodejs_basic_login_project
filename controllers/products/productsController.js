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

const filterProduct = async (req, res) => {
  const qurey = req.query;

  if (qurey) {
    console.log(qurey);
    const options = qurey.clouth.split(",");

    const filter = {
      "annotation.label": { $in: options },
    };

    const filteredProducts = await Products.find(filter).limit(20).exec();

    res.json({
      statusCode: 200,
      data: filteredProducts,
      message: "Products data load successfull.",
      error: null,
      state: "OK",
      pagination: {
        page: 1,
        perpage: 20,
        count: filteredProducts.length,
        sort: "asc",
      },
    });
  } else {
    res.json({
      statusCode: 400,
      data: null,
      message: "Something went wrong!",
      error: "Error",
      state: "OK",
    });
  }
};

module.exports = { getProducts, filterProduct };
