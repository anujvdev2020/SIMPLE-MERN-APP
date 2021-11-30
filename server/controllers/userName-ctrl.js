const userName = require("../models/userName-model");

addUser = (req, res) => {
  console.log("req");
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an item",
    });
  }

  const name = new userName(body);

  if (!name) {
    return res.status(400).json({ success: false, error: err });
  }

  name
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: name._id,
        message: "User name added",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "User name not added",
      });
    });
};

// getTodos = async (req, res) => {
//   await Todo.find({}, (err, todos) => {
//     if (err) {
//       return res.status(400).json({ success: false, error: err });
//     }
//     if (!todos.length) {
//       return res.status(404).json({ success: false, error: `Item not found` });
//     }
//     return res.status(200).json({ success: true, data: todos });
//   }).catch((err) => console.log(err));
// };

module.exports = { addUser };
