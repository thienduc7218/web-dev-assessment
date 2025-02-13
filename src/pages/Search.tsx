import { useState } from "react";
import Header from "../components/Header/Header";
import SearchResult from "../components/SearchResult/SearchResult";
import { SearchResponse } from "../types/types";

const getSearchResult = async () => {
    const response = await fetch(import.meta.env.VITE_SEARCH_API)
    if (!response.ok) {
        return {
            data: null,
            error: `Failed to retrieve data from server!! Return ${response.status}`,
        };
    }
    const data = await response.json();

    return {
        data,
        error: null,
    };

}

const Search = () => {
    const [result, setResult] = useState<SearchResponse | null>(null)
    const [error, setError] = useState<string | null>(null);


    const handleSearch = async (searchTerm: string) => {
        console.log(searchTerm);
        const response = await getSearchResult();
        if (response.error) {
            setError(response.error);
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setResult(response.data);
    }

    return (
        <>
            <Header onSearch={handleSearch} />
            {error && <p className="text-red-500">{error}</p>}
            {result && <SearchResult result={result} />}
        </>
    )
}

export default Search