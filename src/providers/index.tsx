import { ThemeProvider } from "./theme-provider"
import { QueryProvider } from "./query-provider"
import { ReduxProvider } from "./redux-provider"
import { ClerkProvider } from "@clerk/nextjs"

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <QueryProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </QueryProvider>
      </ThemeProvider>
    </ClerkProvider>
  )
}
