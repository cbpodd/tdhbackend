const axios = require('axios');

module.exports = (method, path, data) => {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](
      `${process.env.API_ENDPOINT}${path}`,
      data
    )
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
};
