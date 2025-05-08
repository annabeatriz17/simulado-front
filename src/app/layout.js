import React from "react";
import "./globals.css";
import { Roboto } from "next/font/google";

const font = Roboto({
    variable: "--font",
    subsets: ["latin"],
});

export const metadata = {
    title: "My Exam Mockup",
    icons: {
        icon: "/icons/favicon.ico",
    },
    description: "Projeto pra mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={font.variable}>
            <body className={font.className}>{children}</body>
            <head>
            </head>
        </html>
    );
}
