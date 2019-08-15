const axios = require('axios');

module.exports = async (method, path, data) => {
  try {
    const res = await axios[method.toLowerCase()](path, data);
    return res.data;
  } catch (err) {
    throw err.response.data.error;
  }
};
