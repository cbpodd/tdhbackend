const mongoose = require('mongoose');

exports.connectToDB = () => {
  const env = process.env.NODE_ENV;
  mongoose.set('debug', env !== 'PRODUCTION');
  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_UN}:${
      process.env.MONGO_PW
    }@thediningapp-da24b.mongodb.net/${
      process.env.DB_NAME
    }?retryWrites=true&w=majority`,
    {
      keepAlive: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  );
  mongoose.Promise = Promise;
};

/**
 * Day Model
 * @constructor db.Day.create
 */
exports.Trip = require('./day');

/**
 * DiningHall Model
 * @constructor db.DiningHall.create
 */
exports.Trip = require('./dininghall');
