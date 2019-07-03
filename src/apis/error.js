/**
 * Controller for handling errors
 * @file error.js
 * @author Cameron Podd
 * @exports errorHandler
 */

/**
 * Final error Handler
 * @param {Error} error The error in question
 * @param {Request} request Express Request Object
 * @param {Response} response Express Respone Object
 * @param {next} next Express Next Object
 * @returns {Promise<void>}
 */
module.exports = (error, request, response, next) => {
  console.log(error);
  return response.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal Server Error',
      data: error.data || null
    }
  });
};
