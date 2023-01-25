import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return <main className="flex-1 bg-base-100"></main>;
}
