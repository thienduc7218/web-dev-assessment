interface Highlight {
    BeginOffset: number;
    EndOffset: number;
}

interface DocumentTitle {
    Text: string;
    Highlights: Highlight[];
}

export interface DocumentExcerpt {
    Text: string;
    Highlights: Highlight[];
}

export interface ResultItem {
    DocumentId: string;
    DocumentTitle: DocumentTitle;
    DocumentExcerpt: DocumentExcerpt;
    DocumentURI: string
}

export interface SearchResponse {
    TotalNumberOfResults: number;
    Page: number;
    PageSize: number;
    ResultItems: ResultItem[];
}

export interface SuggestionResponse {
    stemmedQueryTerm: string,
    suggestions: string[]
}