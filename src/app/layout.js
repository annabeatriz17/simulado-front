import React from "react";
import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
    title: "My Exam Mockup",
    description: "Projeto pra mostrar tudo que eu sei",
};

const font = Roboto({
    variable: "--font",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={font.variable}>
            <body className={font.className}>{children}</body>
            <head>
                <link rel="icon" href="/icons/favicon.ico" />
            </head>
        </html>
    );
}
