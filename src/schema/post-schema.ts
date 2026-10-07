import { model, Schema } from "mongoose"

const postSchema = new Schema({
  postId: {
    type: String,
    required: [true, "PostId is required"],
  },
  caption: String,
  media: {
    type: String,
    required: [true, "Media is required"],
  },
  mediaType: {
    type: String,
    enum: ["IMAGE", "VIDEO"],
    required: [true, "Media Type is required"],
  },
  automation: {
    type: Schema.Types.ObjectId,
    ref: "Automation",
    required: [true, "Automation is required"],
  },
})

export const Post = model("Post", postSchema)
