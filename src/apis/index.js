const { getFromCache } = require('../db');

exports.getAll = async (req, res, next) => {
  const { date } = req;
  try {
    const diningHalls = await getFromCache(date);
    res.json(diningHalls);
  } catch (err) {
    next(err);
  }
};

exports.getDH = async (req, res, next) => {
  const {
    date,
    params: { dhName }
  } = req;
  try {
    const diningHall = await getFromCache(date, dhName);
    res.json(diningHall);
  } catch (err) {
    next(err);
  }
};
