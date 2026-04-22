import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./styles/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doodle Tank",
  description: "Doodle Tank Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
