const mongoose = require("mongoose");

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const CommentSchema = new mongoose.Schema(
  {

    description:      { type: String, required: true },
    id_post:      { type: String, required: true },
    createdAt: { type: Date, default: Date.now , },



    // sid: { type: String, required: true },
    // first: { type: String, required: true },
    // last: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
