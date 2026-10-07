import React from "react"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-background">
      {children}
    </main>
  )
}

export default Layout
