const mongoose = require("mongoose");

/**
 * อ่านเพิ่มเติม https://mongoosejs.com/docs/guide.html
 */
const PostdataSchema = new mongoose.Schema(
  {
    user_data :{ type: String, required: true },
    topic:     { type: String, required: true },
    description:      { type: String, required: true },
    category:      { type: String, required: true },
    createdAt: { type: Date, default: Date.now },

    // sid: { type: String, required: true },
    // first: { type: String, required: true },
    // last: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Postdata", PostdataSchema);
