import mongoose from "mongoose"

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://ohshima:N8k21HiWjojYkhek@cluster0.jg6csvq.mongodb.net/?retryWrites=true&w=majority")
    console.log("Success: Connected to MongoDB")
  } catch(err) {
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB