'use client'
import { useState } from "react";

interface searchProps{
    onSearch:(searchInput:string)=>void;
    loading:boolean;
}

export default function searchbar({onSearch, loading}: searchProps){
    const [searchInput, setSearchInput] = useState("");

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const value = searchInput.trim();
        if(!value) return;
        onSearch(value);
    }
    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-2xl p-3">
            <input type="text"
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            placeholder="search Medicine here"
            disabled={loading}
            className="flex rounded-lg border border-gray-300"
            />
            <button type="submit"
            disabled={loading}
            className="flex-1 rounded-lg bg-gray-700 text-white font-medium "
            >
                {loading ? "Searching..": "Search"}
            </button>
        </form>
    )
}