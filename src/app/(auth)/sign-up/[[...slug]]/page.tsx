import { SignUp } from "@clerk/nextjs"

const CLERK_SIGNIN_REDIRECT_URL = process.env.CLERK_SIGNIN_REDIRECT_URL

const Page = () => <SignUp signInUrl={CLERK_SIGNIN_REDIRECT_URL} />

export default Page
