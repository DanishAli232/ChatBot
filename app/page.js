"use client";
import Chat from "@/Components/Chat/page";
import Sidebar from "@/Components/Chat/sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
export default function Home() {
  return (
    <div>
      <Chat />
    </div>
  );
}
