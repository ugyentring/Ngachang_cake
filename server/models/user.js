import { DataTypes, Sequelize } from "sequelize";
import bcrypt from "bcrypt";

// Create a Sequelize instance and connect to your PostgreSQL database
const sequelize = new Sequelize("cake", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
// Define the User model with a schema
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // photo: {
    //   type: DataTypes.STRING,
    //   defaultValue: 'default.jpg',
    //   allowNull: false,
    // },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 255], // Minimum length of 6 characters
      },
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt fields to the model
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const saltRounds = 12;
          const hash = await bcrypt.hash(user.password, saltRounds);
          user.password = hash;
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const saltRounds = 12;
          const hash = await bcrypt.hash(user.password, saltRounds);
          user.password = hash;
        }
      },
    },
  }
);

// Define a method to compare passwords on the User model
User.prototype.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("compare password Err", err);
      return next(err, false);
    }
    console.log("match password", match);
    return next(null, match);
  });
};

// Synchronize the model with the database (create the table if it doesn't exist)
sequelize.sync();
export default User;



// import { DataTypes, Sequelize } from "sequelize";
// import bcrypt from "bcrypt";

// // Create a Sequelize instance and connect to your PostgreSQL database
// const sequelize = new Sequelize('booking', 'postgres', 'root', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// // Check the database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection to the database has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// // Define the User model with a schema
// const User = sequelize.define(
//   "Customer",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     photo: {
//       type: DataTypes.STRING,
//       defaultValue: 'default.jpg',
//       allowNull: false,

//     },
//     role: {
//       type: DataTypes.STRING,
//       defaultValue: 'user',
//       validate: {
//         isIn: [['user', 'admin']], // Validates that the role is either 'user' or 'admin'
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [6, 255], // Minimum length of 6 characters
//       },
//     },
//   },
//   {
//     timestamps: true, // This will add createdAt and updatedAt fields to the model
//     hooks: {
//       beforeCreate: async (user) => {
//         if (user.password) {
//           const saltRounds = 12;
//           const hash = await bcrypt.hash(user.password, saltRounds);
//           user.password = hash;
//         }
//       },
//       beforeUpdate: async (user) => {
//         if (user.changed("password")) {
//           const saltRounds = 12;
//           const hash = await bcrypt.hash(user.password, saltRounds);
//           user.password = hash;
//         }
//       },
//     },
//   }
// );

// // Define a method to compare passwords on the User model
// User.prototype.comparePassword = function (password, next) {
//   bcrypt.compare(password, this.password, function (err, match) {
//     if (err) {
//       console.log("compare password Err", err);
//       return next(err, false);
//     }
//     console.log("match password", match);
//     return next(null, match);
//   });
// };

// // Synchronize the model with the database (create the table if it doesn't exist)
// sequelize.sync();
// export default User;
