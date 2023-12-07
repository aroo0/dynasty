import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dynasty.lukaszstoklosa.com"),

  title: "Dynasty | Łukasz Stokłosa",
  description: "The cycle consists of found footage videos created since 2011. The series is inspired by the TV series \"Dynasty\" (1981-1989).",
  twitter: {
    title: "Dynasty | Łukasz Stokłosa",
    description:
      'The cycle consists of found footage videos created since 2011. The series is inspired by the TV series "Dynasty" (1981-1989).',
    images: ["/dynasty.jpg"],
  },
  openGraph: {
    type: "website",
    url: "https://dynasty.lukaszstoklosa.com",
    title: "Dynasty | Łukasz Stokłosa",
    description:
      'The cycle consists of found footage videos created since 2011. The series is inspired by the TV series "Dynasty" (1981-1989).',
    images: [
      {
        url: "/dynasty.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "bg-background ")}>
        {children}{" "}
      </body>
    </html>
  );
}
