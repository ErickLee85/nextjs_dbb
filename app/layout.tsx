import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes"
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Desoto Bits & Bytes | Modern Software Solutions',
  description: 'We build enterprise grade software ranging from Mobile & Web Apps to low latency APIs and AI Integrations.',
  keywords: ['React Native', 'Next.js', 'Web Development', 'Mobile Apps', 'API Development', 'AI Integration'],
  authors: [{ name: 'Desoto Bits & Bytes' }],
  openGraph: {
    title: 'Desoto Bits & Bytes | Modern Software Solutions',
    description: 'We build enterprise grade software ranging from Mobile & Web Apps to low latency APIs and AI Integrations.',
    type: 'website',
  },
}

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