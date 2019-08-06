/**
 * Mongoose Schema/Model Definition for Day
 * @file Day.js
 * @author Cameron Podd
 * @exports Day
 */

const { Schema } = require('mongoose');

const menuSchema = require('./menu');

const schema = new Schema(
  {
    // Populated by itself by Dining Hall Key
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

schema.pre('save', function(next) {
  if (this.isNew || this.isModified('key') || this.isModified('name')) {
    switch (this.key) {
      case 'evk':
        this.name = "Everybody's Kitchen";
        break;
      case 'village':
        this.name = 'USC Village Dining Hall';
        break;
      case 'parkside':
        this.name = 'Parkside Restaurant & Grill';
        break;
      default:
        const err = new Error('Unknown Key Option');
        err.status = 400;
        throw err;
    }
  }
  next();
});

module.exports = schema;
