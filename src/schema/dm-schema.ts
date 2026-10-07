import { model, Schema } from "mongoose"

const dmSchema = new Schema({
  automation: {
    type: Schema.Types.ObjectId,
    ref: "Automation",
    required: [true, "Automation is required"],
  },
  senderId: String,
  receiverId: String,
  messageType: String,
})

export const DM = model("DM", dmSchema)
