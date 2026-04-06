import jwt from "jsonwebtoken";
import { users } from "../data/users.js";

export const register = (req, res) => {
  const { name, email, password } = req.body;

//   if user already exists
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

//   new user create
  const user = { id: Date.now(), name, email, password };
  users.push(user);

  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1d" });

  res.json({ user, token });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1d" });

  res.json({ user, token });
};

export const getCurrentUser = (req, res) => {
  res.json(req.user);
};