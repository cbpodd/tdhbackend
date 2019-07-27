/**
 * Mongoose Schema Definition for Menu
 * @file menu.js
 * @author Cameron Podd
 * @exports schema
 */

const { Schema } = require('mongoose');

const dishSchema = require('./dish');

module.exports = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    dishes: {
      type: [dishSchema],
      required: true,
      defualt: []
    }
  },
  { timestamps: true }
);
