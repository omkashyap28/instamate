import { Schema, model } from "mongoose"

const triggerSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["AUTO_REPLY", "AUTO_COMMENT", "AUTO_DM"],
      default: "AUTO_REPLY",
      required: [true, "Automation Type is required"],
    },
    automation: {
      type: Schema.Types.ObjectId,
      ref: "Automation",
      required: [true, "Automation is required"],
    },
  },
  {
    timestamps: true,
  }
)

export const Trigger = model("Trigger", triggerSchema)
