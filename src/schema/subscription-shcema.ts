import { model, Schema } from "mongoose"

const subscriptionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      unique: [true, "User already has a subscription"],
    },
    plan: {
      type: String,
      enum: ["Free", "Pro", "Enterprise"],
      required: [true, "Plan is required"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Cancelled"],
      required: [true, "Status is required"],
    },
    customerId: {
      type: String,
      required: [true, "Customer ID is required"],
    },
    subscriptionId: {
      type: String,
      required: [true, "Subscription ID is required"],
    },
    productId: {
      type: String,
      required: [true, "Product ID is required"],
    },
  },
  {
    timestamps: true,
  }
)

export const Subscription = model("Subscription", subscriptionSchema)
