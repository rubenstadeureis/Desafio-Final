const { getAll, create, getOne, remove } = require("../controller/userpoke");

const { getAllh, createH } = require("../controller/user");

module.exports = (app) => {
  app.get("/user/allpoke", getAll);

  app.get("/userh", getAllh);

  app.post("/createuser", createH);

  app.post("/create", create);

  app.get("/user", getOne);

  app.delete("/user/:id", remove);
};
