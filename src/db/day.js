/**
 * Mongoose Schema/Model Definition for Day
 * @file Day.js
 * @author Cameron Podd
 * @exports Day
 */

const mongoose = require('mongoose');

const menuSchema = require('./menu');

const { Schema, model } = mongoose;

const schema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },
    menus: {
      type: [menuSchema],
      required: true,
      defualt: []
    }
  },
  { timestamps: true }
);

module.exports = new model('Day', schema);
