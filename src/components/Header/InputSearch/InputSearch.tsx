import React, { useEffect, useState } from 'react';

interface SearchInputProps {
    onSearch: (url: string) => void;
}

const getSuggestion = async (searchTerm: string) => {
    const response = await fetch(import.meta.env.VITE_GET_SUGGESTION_API)
    if (!response.ok) {
        return {
            data: null,
            error: `Failed to retrieve data from server!! Return ${response.status}`,
        };
    }
    const data = await response.json();
    if (!data.stemmedQueryTerm.includes(searchTerm)) {
        return {
            data: null,
            error: "No suggestions found",
        };
    }

    return {
        data: data.suggestions,
        error: null,
    };

}

const InputSearch = ({ onSearch }: SearchInputProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);


    useEffect(() => {
        const fetchSuggestions = async () => {
            if (searchTerm.length > 2) {
                const result = await getSuggestion(searchTerm);
                if (result.data) {
                    setSuggestions(result.data);
                } else {
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        };

        const debounceTimer = setTimeout(fetchSuggestions, 200);
        return () => {
            clearTimeout(debounceTimer);
        };
    }, [searchTerm]);


    const highlightMatch = (suggestion: string) => {
        if (!searchTerm) return suggestion;

        const lowerSuggestion = suggestion.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        const index = lowerSuggestion.indexOf(lowerSearchTerm);

        if (index === -1) return suggestion;

        const before = suggestion.slice(0, index);
        const match = suggestion.slice(index, index + searchTerm.length);
        const after = suggestion.slice(index + searchTerm.length);

        return (
            <>
                {before}
                <span className="font-bold text-black">{match}</span>
                {after}
            </>
        );
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > -1 ? prev - 1 : prev);
                break;
            case 'Enter':
                if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
                    setSearchTerm(suggestions[selectedIndex]);
                    setSuggestions([]);
                    setSelectedIndex(-1);
                }
                onSearch(searchTerm);
                break;
            case 'Escape':
                setSuggestions([]);
                setSelectedIndex(-1);
                break;
        }
    };

    return (
        <div className="relative flex items-center px-60 py-10">
            <div className="w-full relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        ✕
                    </button>
                )}
                {suggestions.length > 0 && (
                    <ul className="absolute w-full mt-1 bg-white shadow-lg max-h-60 overflow-auto">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${selectedIndex == index ? "bg-gray-100" : ""}`}
                                onClick={() => {
                                    setSearchTerm(suggestion);
                                    setSuggestions([]);
                                }}
                            >
                                {highlightMatch(suggestion)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button
                className="w-3xs z-10 py-2 bg-[#1D76D5] text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => searchTerm && onSearch(searchTerm)}
            >
                Search
            </button>
        </div>
    );
};

export default InputSearch;