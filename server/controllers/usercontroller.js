const User = "../Models/userModel.js";
const generateToken = "../utils/generateToken.js";

const registerUser = async (req, res) => {
  const { firstname, lastname, phoneNumber, email, password } = req.body;
  if (!firstname || !lastname || !phoneNumber || !email || !password) {
    res.status(400).json({ message: "Please fill in all required fields" });
  }
  let user = await User.findOne({ email });
  console.log(user);
  if (user) {
    res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    phone: phoneNumber,
  });
  user = await newUser.save();
  res.send(200).send("User created successfully");
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please fill in all required fields" });
  }
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    res.status(400).send({ message: "User does not exist" });
  }
  const isMatch = await User.matchPassword(password);
  if (!isMatch) {
    res.status(400).send({ message: "Invalid password" });
  }
  res.send(200).json({
    message: "User authenticated successfully",
    token: generateToken({
      id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      created: user.createdAt,
      updated: user.updatedAt,
    }),
  });
};

module.exports = { registerUser, authenticateUser };
