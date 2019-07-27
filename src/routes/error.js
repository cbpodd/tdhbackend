/**
 * Controller for handling errors
 * @file error.js
 * @author Cameron Podd
 * @exports errorHandler
 */

/**
 * Final error Handler
 * @param {Error} err The error in question
 * @param {Request} req Express Request Object
 * @param {Response} res Express Respone Object
 * @param {next} _next Unused
 * @returns {Promise<void>} Nothing
 */
module.exports = (err, req, res, _next) => {
  console.log(err);
  return res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      data: err.data || null,
      status: err.status || 500,
      route: req.originalRoute
    }
  });
};
