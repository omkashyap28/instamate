import { auth } from "@clerk/nextjs/server"
import React from "react"

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const { isAuthenticated, redirectToSignIn } = await auth()

  if (!isAuthenticated) redirectToSignIn()

  return children
}

export default Layout
