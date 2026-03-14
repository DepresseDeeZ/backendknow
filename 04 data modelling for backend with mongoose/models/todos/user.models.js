import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema(
  {
    // this is normal but below it is more effiecent one
    //   username: String,
    //   email: String,
    //   isActive : Boolean

    // effiecent one
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  },
);

// export schema
export const User = mongoose.model("User", userSchema);
