const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");
const path = require("path");
const connectDB = require("./App/config/db.js");
const userRoutes = require("./App/routes/userRoutes.js");
const authRoutes = require("./App/routes/authRoutes.js");
const productRoute = require("./App/routes/productRoutes.js");
const reportRoute = require("./App/routes/ReportRouter.js");
const orderRoutes = require("./App/routes/orderRoutes.js");
const cloudinaryRoutes = require("./App/routes/cloudinary.js");
const wishlistRoutes = require("./App/routes/wishlistRouter.js");
const { notFound } = require("./App/middlewear/middleweas.js");

dotenv.config();

// app
const app = express();
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// app.get('/get', authCheck, admin, (req, res) => res.send('admin'))

// localhost:8000/api/products
// localhost:8000/api/create-or-update-user


// route
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoute);
app.use("/api/reports", reportRoute);
app.use("/api/orders", orderRoutes);
app.use("/api", cloudinaryRoutes);
app.use("/api", wishlistRoutes);

// app.use('/api', authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/static_client/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "static_client", "build", "index.html")
    )
  );
} else {
  app.use(morgan("dev"));
}

// for not found
// app.use(notFound);

// // CastError: Cast to ObjectId failed for value &quot;1&quot;
// app.use(errorHandler);

// port
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
