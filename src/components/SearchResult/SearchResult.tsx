import { SearchResponse } from "../../types/types";

interface SearchResultProps {
    result: SearchResponse;
}

const SearchResult = ({ result }: SearchResultProps) => {
    return (
        <div className="px-10 lg:px-60 py-1">
            <p className="font-bold py-8 text-xl">
                Showing {result.Page}-{result.PageSize} of {result.TotalNumberOfResults}{" "}
                results
            </p>
            {result.ResultItems.map((item, index) => {
                return (
                    <div key={index} className="*:mb-3 mb-8 flex flex-col py-3" aria-label="search-result-item" >
                        <p className="text-xl text-blue-600">{item.DocumentTitle.Text}</p>
                        <p>{item.DocumentExcerpt.Text}</p>
                        <a
                            className="text-gray-500 hover:underline"
                            href={item.DocumentURI}
                        >
                            <p className="break-all sm:break-normal text-sm">{item.DocumentURI}</p>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchResult;