/**
 * Mongoose Schema Definition for Dish
 * @file dish.js
 * @author Cameron Podd
 * @exports schema
 */

const { Schema } = require('mongoose');

module.exports = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    diningHall: {
      type: Schema.Types.ObjectId,
      ref: 'DiningHall',
      required: true
    },
    kitchen: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true,
      default: []
    }
  },
  { timestamps: true }
);
