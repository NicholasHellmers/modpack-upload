import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Modpack-Upload",
  description: "This website is used to upload/download modpacks for Stardew Valley",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-4">
        <a href="/" className="text-lg font-bold">
          Modpack-Upload
        </a>
        <a href="/upload">Upload</a>
        <a href="/download">Download</a>
      </div>
      <div>
        Sign In
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
