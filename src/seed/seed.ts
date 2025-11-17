import { connect } from "mongoose";
import * as bcrypt from "bcryptjs";
import { UserSchema } from "../auth/user.schema";
import { model } from "mongoose";

async function run() {
  await connect("mongodb+srv://jccortez98_db_user:StuJNgFjVY7Wtn8f@cluster0.lr5xg9x.mongodb.net/iglekids");

  const User = model("User", UserSchema);

  const exists = await User.findOne({ username: "admin" });
  if (exists) {
    console.log("Superusuario ya existe");
    return process.exit(0);
  }

  await User.create({
    username: "admin",
    passwordHash: await bcrypt.hash("admin123", 10),
    role: "super"
  });

  console.log("Superusuario creado: admin / admin123");
  process.exit(0);
}

run();
