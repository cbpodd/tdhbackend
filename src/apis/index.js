const { Day } = require('../db');

exports.getAll = async (req, res, next) => {
  try {
    const day = await Day.findOne({ date: req.date });
  } catch (err) {
    next(err);
  }
};

exports.getDH = async (req, res, next) => {
  // dhName is Dining Hall Name
  const { dhName } = req.params;
  try {
    const day = await Day.findOne({ date: req.date });
    const dining
  } catch (err) {
    next(err);
  }
};
