import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes"
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}