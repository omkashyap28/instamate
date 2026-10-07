import { Schema, model } from "mongoose"

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Firstname is required"],
      minlength: [2, "Firstname must be at least 2 characters long"],
      maxlength: [30, "Firstname must not exceed 30 characters"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Lastname is required"],
      minlength: [2, "Lastname must be at least 2 characters long"],
      maxlength: [30, "Lastname must not exceed 30 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Account with this email already exists"],
      trim: true,
      lowercase: true,
      match: [/^[\w\.-]+@[\w\.-]+\.\w+$/, "Please enter a valid email address"],
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
      default: null,
    },
    intigrations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Intigration",
        default: null,
      },
    ],
    automations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Automations",
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
)

export const User = model("User", userSchema)
