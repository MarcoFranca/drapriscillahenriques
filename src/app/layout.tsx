import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Dra. Priscilla Henriques | Saúde Hormonal e Medicina Integrativa",
    description:
        "Atendimento médico em saúde hormonal, metabolismo, menopausa, longevidade e medicina integrativa.",
};

const setInitialTheme = `
(function () {
  try {
    const key = 'priscilla-theme';
    const stored = localStorage.getItem(key);

    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }

    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      return;
    }

    document.documentElement.classList.add('dark');
  } catch {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="priscilla-theme"
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}