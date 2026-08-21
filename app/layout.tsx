import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Raelvis Paulino — Full-Stack Developer",description:"Portfolio of Raelvis Paulino, a junior Full-Stack and Frontend Developer focused on React, Next.js and TypeScript.",keywords:["Raelvis Paulino","Full-Stack Developer","Frontend Developer","React Developer","Next.js","Dominican Republic"]};
export default function RootLayout({children}:LayoutProps<"/">){return <html lang="en"><body>{children}</body></html>}
