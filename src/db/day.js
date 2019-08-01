/**
 * Mongoose Schema/Model Definition for Day
 * @file Day.js
 * @author Cameron Podd
 * @exports Day
 */

const mongoose = require('mongoose');

const diningHallSchema = require('./dininghallday');

const { Schema, model } = mongoose;

const schema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true
    },
    diningHalls: {
      type: [diningHallSchema],
      required: true,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = new model('Day', schema);
