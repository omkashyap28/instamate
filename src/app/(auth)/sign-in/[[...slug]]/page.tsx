import { SignIn } from "@clerk/nextjs"

const CLERK_SIGNUP_REDIRECT_URL = process.env.CLERK_SIGNUP_REDIRECT_URL
const CLERK_SIGNIN_REDIRECT_URL = process.env.CLERK_SIGNIN_REDIRECT_URL

const Page = () => (
  <SignIn
    signUpUrl={CLERK_SIGNUP_REDIRECT_URL}
    signInUrl={CLERK_SIGNIN_REDIRECT_URL}
  />
)

export default Page
