/**
 * Mongoose Schema/Model Definition for Day
 * @file Day.js
 * @author Cameron Podd
 * @exports Day
 */

const { Schema } = require('mongoose');

const menuSchema = require('./menu');

module.exports = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: [
        "Everybody's Kitchen",
        'USC Village Dining Hall',
        'Parkside Restaurant & Grill'
      ]
    },
    key: {
      type: String,
      required: true,
      enum: ['evk', 'village', 'parkside']
    },
    hours: {
      type: [String],
      required: true,
      defualt: []
    },
    menus: {
      type: [menuSchema],
      required: true,
      defualt: []
    }
  },
  { timestamps: true }
);
