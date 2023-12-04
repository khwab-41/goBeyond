const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));
mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
  usenewUrlparser: true,
  // useUnifiedTopology: true,
});
let db = mongoose.connection;

const users_schema = new mongoose.Schema({
  fname_sgn: String,
  lname_sgn: String,
  email_sgn: String,
  password_sgn: String,
  cnf_password_sgn: String,
});
const users_models = mongoose.model("users_models", users_schema);

// const book_schema = new mongoose.Schema({
//   from: String,
//   to: String,
//   ddate: Date,
//   place: String,
//   package: String,
//   adults: Number,
//   children: Number,
//   rdate: Date,
//   message: String,
//   name: String,
//   phone: Number,
//   email: String,
// });
// const book_user = mongoose.model("book_user", book_schema);

const book_schema = new mongoose.Schema({
  from: String,
  to: String,
  ddate: Date,
  place: String,
  package: String,
  adults: Number,
  children: Number,
  rdate: Date,
  message: String,
  name: String,
  phone: Number,
  email: String,
});
const book_user = mongoose.model("book_user", book_schema);

// const user = mongoose.model("user", users_data);
app.listen(8001);

app.use(express.static(__dirname)); //CSS import

app.get("/", (req, res) => {
  res.sendFile("home_page_html.html", { root: __dirname });
  // res.render('index', { sucess: '' });
});

app.get("/home_page_html.html", (req, res) => {
  res.sendFile("home_page_html.html", { root: __dirname });
});
app.get("/packages.html", (req, res) => {
  res.sendFile("packages.html", { root: __dirname });
});
app.get("/packageagra.html", (req, res) => {
  res.sendFile("packageagra.html", { root: __dirname });
});
app.get("/packageand.html", (req, res) => {
  res.sendFile("packageand.html", { root: __dirname });
});
app.get("/packagegoa.html", (req, res) => {
  // res.sendFile("packagegoa.html", { root: __dirname });
  res.sendFile(__dirname + "./packagegoa.html");
});
app.get("/packagejai.html", (req, res) => {
  res.sendFile("packagejai.html", { root: __dirname });
});
app.get("/packagelad.html", (req, res) => {
  res.sendFile("packagelad.html", { root: __dirname });
});
app.get("/payment.html", (req, res) => {
  res.sendFile("payment.html", { root: __dirname });
});
app.get("/book_page.html", (req, res) => {
  res.sendFile("book_page.html", { root: __dirname });
});

app.post("/sign_up", (req, res) => {
  let fname_sgn = req.body.fname_sgn;
  let lname_sgn = req.body.lname_sgn;
  let email_sgn = req.body.email_sgn;
  let password_sgn = req.body.password_sgn;
  let cnf_password_sgn = req.body.cnf_password_sgn;

  let data = {
    fname_sgn: fname_sgn,
    lname_sgn: lname_sgn,
    email_sgn: email_sgn,
    password_sgn: password_sgn,
    cnf_password_sgn: cnf_password_sgn,
  };

  db.collection("users_models").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Sucessfully");
  });

  return res.redirect("signup_success.html");
});

app.post("/loged_in", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const result_1 = users_models.find({
    email_sgn: email,
    password_sgn: password,
  });

  if (result_1) {
    console.log("Isert");
    return res.send("(Invalid email or password)");
  }
  res.sendFile("home_page_html.html", { root: __dirname });
  console.log("Outside Check");
});

app.post("/book", (req, res) => {
  let from = req.body.from;
  let to = req.body.to;
  let ddate = req.body.ddate;
  let place = req.body.place;
  let package = req.body.package;
  let adults = req.body.nadults;
  let children = req.body.nchild;
  let rdate = req.body.rdate;
  let message = req.body.message;
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;

  let data = {
    from: from,
    to: to,
    ddate: ddate,
    place: place,
    package: package,
    adults: adults,
    children: children,
    rdate: rdate,
    message: message,
    name: name,
    phone: phone,
    email: email,
  };
  db.collection("book").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Record Inserted Sucessfully");
  });

  return res.send(`<html>
  <head>
  </head>
  <body style=
  "background: linear-gradient(
      rgba(0, 0, 0, 0.7),
      transparent,
      rgba(0, 0, 0, 0.7)
    ),
    url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80');
    color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(3px);">

  <table border=1 align="center" style="
  padding: 4px;">
  <tr>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">From</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">To</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">departure date</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Place</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Package</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Adults</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">children</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Return date</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Message</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Name</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Phone</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">Email</td>

  </tr>

  <tr>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${from}</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">${to}</td>

  <td style="
  padding: 10px;
  border: #fff solid 3px;">${ddate}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${place}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${package}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${adults}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${children}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${rdate}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${message}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${name}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${phone}</td>
  <td style="
  padding: 10px;
  border: #fff solid 3px;">${email}</td></tr>
  </table></body></html>`);
});
