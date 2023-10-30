const router = require("express").Router();
const {getInfo, postInfo} = require("../controllers/infoController");
const Info = require("../models/info.model")
router.get("/", async (req, res) => {
    try {
      const info = await Info.find();
      res.json(info);
    } catch (err) {
      res.send("err " + err);
    }
  });

router.post("/", async (req, res) => {
    const info = await new Info(req.body);
  
    try {
      info.save();
      res.json({message: "hello"})
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router
