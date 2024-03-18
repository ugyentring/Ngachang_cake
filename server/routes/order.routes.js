const express = require("express");
const cakeOrderController = require("../controllers/order.controller");

const router = express.Router();

// Create a new cake order
router.post("/order", cakeOrderController.createCakeOrder);

// Get all cake orders
router.get("/get-orders", cakeOrderController.getCakeOrders);

// Get a specific cake order by ID
router.get("/order/:id", cakeOrderController.getCakeOrderById);

// Update an existing cake order
router.put("/order/:id", cakeOrderController.updateCakeOrder);

// Delete an existing cake order
router.delete("/order/:id", cakeOrderController.deleteCakeOrder);

module.exports = router;
