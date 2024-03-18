// Import the CakeOrder model
const CakeOrder = require("../models/order.js");

const createCakeOrder = async (req, res) => {
  const { cakeFlavor, cakeSize, wording, otherDescription, photo } = req.body;

  try {
    console.log(CakeOrder);

    // Use the create method directly on the CakeOrder model
    const cakeOrder = await CakeOrder.create({
      cakeFlavor,
      cakeSize,
      wording,
      otherDescription,
      photo,
    });

    res
      .status(201)
      .json({ message: "Cake order created successfully!", cakeOrder });
  } catch (error) {
    console.error("Error creating cake order:", error);
    res.status(500).json({ message: "Error creating cake order." });
  }
};

const getCakeOrders = async (req, res) => {
  try {
    const cakeOrders = await CakeOrder.findAll();
    console.log(cakeOrders);
    res.status(200).json(cakeOrders);
  } catch (error) {
    console.error("Error fetching cake orders:", error);
    res.status(500).json({ message: "Error fetching cake orders." });
  }
};

const getCakeOrderById = async (req, res) => {
  const cakeOrderId = parseInt(req.params.id);

  try {
    const cakeOrder = await CakeOrder.findByPk(cakeOrderId);

    if (!cakeOrder) {
      return res.status(404).json({ message: "Cake order not found." });
    }

    res.status(200).json({ cakeOrder });
  } catch (error) {
    console.error("Error fetching cake order by id:", error);
    res.status(500).json({ message: "Error fetching cake order by id." });
  }
};

const updateCakeOrder = async (req, res) => {
  const cakeOrderId = parseInt(req.params.id);
  const { cakeFlavor, cakeSize, wording, otherDescription, photo } = req.body;

  try {
    const cakeOrder = await CakeOrder.findByPk(cakeOrderId);

    if (!cakeOrder) {
      return res.status(404).json({ message: "Cake order not found." });
    }

    await cakeOrder.update({
      cakeFlavor,
      cakeSize,
      wording,
      otherDescription,
      photo,
    });

    res
      .status(200)
      .json({ message: "Cake order updated successfully!", cakeOrder });
  } catch (error) {
    console.error("Error updating cake order:", error);
    res.status(500).json({ message: "Error updating cake order." });
  }
};

const deleteCakeOrder = async (req, res) => {
  const cakeOrderId = parseInt(req.params.id);

  try {
    const cakeOrder = await CakeOrder.findByPk(cakeOrderId);

    if (!cakeOrder) {
      return res.status(404).json({ message: "Cake order not found." });
    }

    await cakeOrder.destroy();
    res.status(200).json({ message: "Cake order deleted successfully!" });
  } catch (error) {
    console.error("Error deleting cake order:", error);
    res.status(500).json({ message: "Error deleting cake order." });
  }
};

module.exports = {
  createCakeOrder,
  getCakeOrders,
  getCakeOrderById,
  updateCakeOrder,
  deleteCakeOrder,
};
