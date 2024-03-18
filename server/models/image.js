import { DataTypes, Sequelize } from "sequelize";

// Create a Sequelize instance and connect to your PostgreSQL database
const sequelize = new Sequelize("postgres", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
});

// Check the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection to the database has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });


// Define the Image model with a schema
const Image = sequelize.define(
    'Image',
    {
        photo: {
            type: DataTypes.STRING,
            defaultValue: 'default.jpg',
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync();
export default Image;
