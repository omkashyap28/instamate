import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SignIn",
  description:
    "SignIn to instaslide to get access to all features without any interuptions.",
}

const Page = () => <SignIn />

export default Page
