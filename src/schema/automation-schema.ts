import { model, Schema } from "mongoose"

const automationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    name: {
      type: String,
      required: [true, "Automation Name is required"],
    },
    keywords: {
      type: Schema.Types.ObjectId,
      ref: "Keywords",
      required: [true, "Automation Keywords is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    trigger: [
      {
        type: Schema.Types.ObjectId,
        ref: "Trigger",
        required: [true, "Automation Trigger is required"],
      },
    ],
    listener: [
      {
        type: Schema.Types.ObjectId,
        ref: "Listener",
        required: [true, "Automation Listener is required"],
      },
    ],
    dms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dms",
      },
    ],
    keyword: {
      type: String,
      required: [true, "Keyword is required"],
    },
  },
  {
    timestamps: true,
  }
)

export const Automation = model("Automation", automationSchema)
