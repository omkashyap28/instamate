import React from "react"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const { isAuthenticated, redirectToSignIn, sessionClaims } = await auth()

  if (!isAuthenticated) redirectToSignIn()

  if (sessionClaims?.metadata.role !== "admin") redirect("/")

  return <div>{children}</div>
}

export default Layout
