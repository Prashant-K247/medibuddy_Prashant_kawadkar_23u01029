'use client'
import { useState } from "react";
import { searchMedicine } from "@/api/medicine";
import type { medicine as Medicine } from "@/type/medicine";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(searchInput: string) {
    try {
      setLoading(true);
      setError("");

      const data = await searchMedicine(searchInput);
      setMedicines(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to search medicines.");
      setMedicines([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full flex-1 px-4 py-10 bg-white ">
      <h1 className="mb-6 text-3xl font-bold">Find a medicine</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <p role="alert" className="mt-4 text-red-600">
          {error}
        </p>
      )}

      {medicines.length > 0 && (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {medicines.map((item) => (
            <li key={item.id} className="rounded-lg border border-gray-200 p-4">
              <h2 className="font-semibold">{item.brandname}</h2>
              <p className="mt-1 text-sm text-gray-600">
                Generic name: {item.genericname}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Manufacturer: {item.manufacturer}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}