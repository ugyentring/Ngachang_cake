import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

const CakeOrder = sequelize.define(
  "CakeOrder",
  {
    cakeFlavor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cakeSize: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wording: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    otherDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: "default.jpg",
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

CakeOrder.sync();

module.exports = CakeOrder;
