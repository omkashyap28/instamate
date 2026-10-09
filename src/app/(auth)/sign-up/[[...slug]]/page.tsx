import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SignUp",
  description:
    "SignUp to instaslide to get access to all features without any interuptions.",
}
const Page = () => <SignUp />

export default Page
