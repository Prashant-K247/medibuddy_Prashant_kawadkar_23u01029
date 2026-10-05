'use client'
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { searchMedicine } from "@/api/medicine";
import { medicine } from "@/type/medicine";

export default function Home(){
  const [medicine, setMedicine] = useState<medicine[]>([])
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState("");

  async function handleSearch(searchInput:string) {
    try {
      setLoading(true);
      setError("")

      const data = await searchMedicine(searchInput);
      setMedicine(data);
      
    } catch (error) {
      throw error;
    } finally{
      setLoading(false);
    }
    
  }
}