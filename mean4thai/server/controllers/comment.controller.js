const Joi = require("joi");
const Comment = require("../models/comment.model");

const commentSchema = Joi.object({
  description: Joi.string().required(),
  id_post: Joi.string().required(),

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

async function insert(comment) {
  comment = await Joi.validate(comment, commentSchema, { abortEarly: false });
  return await new Comment(comment).save();
}
/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/api.html
 */
async function get(_id) {
  return await Comment.find({ _id: _id });
}

async function getAll() {
  return await Comment.find();
}

async function search(key, value) {
  let query = {};
  query[key] = value;
  return await Comment.find(query);
}

async function deleteData(_id) {
  return await Comment.findByIdAndDelete(_id)
}
async function updateData(_id,data) {
  return Comment.findByIdAndUpdate(_id, data);
}


