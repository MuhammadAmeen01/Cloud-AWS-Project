// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");

// dotenv.config();

// mongoose
//   .connect('mongodb://localhost:27017')
//   .then(() => console.log("DB Connection Successfull!"))
//   .catch((err) => {
//     console.log(err);
//   });


// const User = mongoose.model("product", ProductSchema);

// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend server is running!");
// });



const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
// mongo

mongoose.connect('mongodb://127.0.0.1:27017/Assignment4', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

//const ProductModel = mongoose.model('Product', ProductSchema);
const User = mongoose.model('products',ProductSchema); // get the User model
//------------------------------------------------------------------------
app.get('/products', function(req, res) {
    User.find().exec()
    .then(function(products) {
        res.send(products);
    })
    .catch(function(err) {
        console.log(err);
        res.status(500).send('Error retrieving products');
    });

  });
//------------------------------------------------------------------------

app.get('/products/:id', function(req, res) {
    const id = req.params.id;
  
   
  
      // Find the product with the specified ID
      User.findOne({ _id: id }, function(err, product) {
        if (err) throw err;
        if (!product) {
          res.status(404).send('Product not found');
        } else {
          res.send(product);
        }
        client.close();
      });
    });
//------------------------------------------------------------------------
app.get('/products', function(req, res) {
    const limit = parseInt(req.query.limit) || 10;
  
    
  
      // Limit the number of results returned by the query
      User.find().limit(limit).toArray(function(err, products) {
        if (err) throw err;
        res.send(products);
        client.close();
      });
    });
//------------------------------------------------------------------------
app.listen(5000, () => {
    console.log("Server is listening on port 3000");
});