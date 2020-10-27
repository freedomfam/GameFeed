const Joi = require("joi");
const Postdata = require("../models/postdata.model");

const postdataSchema = Joi.object({
  topic: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  user_data: Joi.string().required(),

  // sid: Joi.number().integer().required(),
  // first: Joi.string().required(),
  // last: Joi.string().required(),
});

module.exports = {
  insert,
  get,
  getAll,
  search,
  deleteData,
  updateData,
};

async function insert(postdata) {
  postdata = await Joi.validate(postdata, postdataSchema, { abortEarly: false });
  return await new Postdata(postdata).save();
}
/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(_id) {
  return await Postdata.find({ _id: _id });
}

async function getAll() {
  return await Postdata.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Postdata.find(query);
}

async function deleteData(_id) {
  return await Postdata.findByIdAndDelete(_id)
}

async function updateData(_id,data) {
  return Postdata.findByIdAndUpdate(_id, data);
}
