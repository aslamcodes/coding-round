import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/authorization.js";

const { Schema, model } = mongoose;
const { hash, compare } = bcryptjs;

const bankUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

bankUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password, 10);
});

bankUserSchema.methods.generateVerificationToken = function () {
  const user = this;
  const verificationToken = generateToken(user._id);
  return verificationToken;
};

bankUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};
//create index for user schema
bankUserSchema.index(
  { name: "text", email: "text", phoneNumber: "text", registerNumber: "text" },
  { name: "usersTextIndex" }
);

const BankUser = model("BankUser", bankUserSchema);

export default BankUser;
