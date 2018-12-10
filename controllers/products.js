//All Product Logic

const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
  };

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    // products.push({title: req.body.title})
    res.redirect("/");
  }

exports.getProducts = (req, res, next) => {
    // console.log('in another middle ware')
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    const products = Product.fetchAll()
    res.render('shop', {prods: products, pageTitle: "Shop", path: '/'})
  }