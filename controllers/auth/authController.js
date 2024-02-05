"use strict";
const User = require("../../schemas/schema_user.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const body = req.body;

  if (!body) {
    res.json({
      message: "Invalide request, check values",
    });
  } else {
    console.log(body.toString());

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(body.password, salt);

    const newUser = new User({
      username: body.username,
      email: body.email,
      password: hashpassword,
    });

    newUser
      .save()
      .then((data) => {
        res.json({
          statusCode: 200,
          message: "User created successfully.",
          error: null,
          state: "OK",
        });
        console.log(newUser);
      })
      .catch((err) => {
        err.code == 11000
          ? res.json({
              statusCode: 400,
              message: "email address already exist!",
              error: "Duplicate email error",
              state: "OK",
            })
          : res.json({
              statusCode: 400,
              message: "Somthing when wrong",
              error: err,
              state: "OK",
            });
      });
  }
};

const login = async (req, res) => {
  let result;
  const { email, password } = req.body;
  if (!email && !password) {
    res.json({
      statusCode: 400,
      message: "Invalid username or password!",
      error: "Invalid username or password!",
      state: "OK",
    });
  } else {
    result = await User.findOne({
      email: email,
    }).exec();

    const isValidPassword = await bcrypt.compare(password, result.password);

    if (isValidPassword) {
      console.log(isValidPassword);
      res.json({
        statusCode: 200,
        message: "Login successfully!",
        error: null,
        state: "OK",
        data: result,
      });
    } else {
      res.json({
        statusCode: 400,
        message: "Invalid username or password!",
        error: "Error",
        state: "OK",
      });
    }
  }
};

const deleteUser = async (req, res) => {
  const { email, password } = req.body;

  const result = User.find({
    email: email,
  }).exec();

  if (result && result.length != 0) {
    console.log(result);
    const deleteq = User.deleteOne({ email: email });
    const deleteResult = deleteq.exec();
    if (deleteResult) {
      res.json({
        statusCode: 200,
        message: "User successfully deleted!",
        error: null,
        state: "OK",
        data: result,
      });
    } else {
      res.json({
        statusCode: 401,
        message: "Something when wrong!",
        error: "Error",
        state: "OK",
      });
    }
  } else {
    res.json({
      statusCode: 400,
      message: "Invalid email address!",
      error: "Error",
      state: "OK",
    });
  }
};

module.exports = { signup, login, deleteUser };
