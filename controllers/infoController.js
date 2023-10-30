const Info = require("../models/info.model");

const getInfo = async (req, res) => {
  try {
    const info = await Info.find();
    res.json(info);
  } catch (err) {
    res.send("err " + err);
  }
};

const postInfo =  (req, res) => {
  const info = new Info(req.body);

  try {
    info.save();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getInfo, postInfo };
