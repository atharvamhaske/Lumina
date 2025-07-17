import { Inter, Edu_QLD_Hand, Mona_Sans } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const eduQLDHand = Edu_QLD_Hand({
    subsets: ["latin"],
    variable: "--font-edu-qld-hand",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const monaSans = Mona_Sans({
    subsets: ["latin"],
    variable: "--font-mona-sans",
    weight: ["400", "500", "600", "700"],
    display: "swap",
});