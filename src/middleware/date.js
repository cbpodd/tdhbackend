exports.getDate = (req, _res, next) => {
  let date = new Date();
  if (req.query.year && req.query.month && req.query.day) {
    const { year, month, day } = req.query;
    date = new Date(`${year}-${month}-${day}`);
  }
  req.date = date;
  return next();
};
