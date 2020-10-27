const express = require('express');
const asyncHandler = require('express-async-handler');
const commentCtrl = require('../controllers/comment.controller');

const router = express.Router();
module.exports = router;

//router.use(passport.authenticate('jwt', { session: false }))

router.route('/').post(asyncHandler(insert));
router.route('/get/:_id').get(asyncHandler(get));
router.route('/all').get(asyncHandler(getAll));
router.route('/search').get(asyncHandler(search));
router.route('/delete/:_id').delete(asyncHandler(deleteData));


async function insert(req, res) {
  let comment= await commentCtrl.insert(req.body);
  res.json(comment);
}

async function get(req, res) {
  let all_comments = await commentCtrl.get(req.params['_id']);
  res.json(all_comments);
}

async function getAll(req, res) {
  let all_comments = await commentCtrl.getAll();
  res.json(all_comments);
}

async function search(req, res) {
  let result = await commentCtrl.search(req.params['key'], req.params['value']);
  res.json(result);
}

async function deleteData(req, res) {
  let all_comments = await commentCtrl.deleteData(req.params['_id']);
  res.json(all_comments);
}




