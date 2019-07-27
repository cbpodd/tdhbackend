/**
 * Mongoose Schema/Model Definition for Day
 * @file Day.js
 * @author Cameron Podd
 * @exports Day
 */

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    hours: {
      type: [String],
      required: true,
      defualt: []
    }
  },
  { timestamps: true }
);

module.exports = new model('DiningHall', schema);
