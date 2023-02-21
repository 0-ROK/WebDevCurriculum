const express = require("express");
const { UUIDV4 } = require("sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("", (req, res, next) => {
//   res.send("hello");
// });

// 사용자 인증
app.post("/login", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "localhost:3000");
  res.setHeader("Access-Contrl-Allow-Credentials", true);
  /* req
    {
        id,
        userName,
        password
    }
    */
  // db에 요청한 사용자 정보가 있는지 확인 (구현 예정)
  console.log("req.body 입니다 :::::", req.body);
  try {
    const token = jwt.sign(
      {
        userName: req.body.userName,
        // id: req.body.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
        issuer: "issuer",
      }
    );
    return res.json({
      code: 200,
      message: "토큰이 발급되었어요",
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
});

// 글 crud

app.listen(8000, () => console.log("express server start!!!"));
