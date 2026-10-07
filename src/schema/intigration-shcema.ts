import { model, Schema } from "mongoose"

const intigrationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      unique: [true, "User already has an integration"],
    },
    instagramAccountId: {
      type: String,
      required: [true, "Instagram Account ID is required"],
      unique: [true, "Instagram Account ID already exists"],
    },
    accessToken: {
      type: String,
      required: [true, "Access Token is required"],
    },
    refreshToken: {
      type: String,
      required: [true, "Refresh Token is required"],
    },
    expiresIn: {
      type: Number,
      required: [true, "Expires In is required"],
    },
    instagramUserId: {
      type: String,
      required: [true, "Instagram User ID is required"],
      unique: [true, "Instagram User ID already exists"],
    },
  },
  {
    timestamps: true,
  }
)
export const Integration = model("Integration", intigrationSchema)
