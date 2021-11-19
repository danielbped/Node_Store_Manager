const { ObjectId } = require('mongodb');
const errorMessage = require('../errorMessage');
const errors = require('../../utils/errorMessages');

module.exports = (id) => {
  // console.log(ObjectId.isValid(id));
  if (!ObjectId.isValid(id)) return errorMessage(errors.invalidId);
  
  return true;
};