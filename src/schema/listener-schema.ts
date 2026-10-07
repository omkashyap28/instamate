import { model, Schema } from "mongoose"

const listenerSchema = new Schema({
  automation: {
    type: Schema.Types.ObjectId,
    ref: "Automation",
    required: [true, "Automation is required"],
  },
  listener: {
    type: String,
    enum: ["SMART_AI", "MESSAGE"],
    prompt: {
      type: String,
      default: null,
    },
    commentReply: {
      type: String,
      default: null,
    },
    dmCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
  },
})

export const Listener = model("Listener", listenerSchema)
