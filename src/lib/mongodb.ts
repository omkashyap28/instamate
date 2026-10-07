import mongoose from "mongoose"

const INSTAMATE_MONGODB_URI = process.env.INSTAMATE_MONGODB_URI

type Connection = {
  isConected: number
}

const connection: Connection = { isConected: 0 }

async function dbConnect(): Promise<void> {
  if (connection.isConected) return

  if (!INSTAMATE_MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable")
  }

  try {
    const db = await mongoose.connect(INSTAMATE_MONGODB_URI)
    connection.isConected = db.connections[0].readyState
    console.log("DB Connected")
  } catch (error) {
    console.error("Fail to connect database", error)
    process.exit(1)
  }
}

export default dbConnect
