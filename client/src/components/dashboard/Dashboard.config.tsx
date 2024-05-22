export interface IQuote {
  quote?: string;
  author?: string;
  category?: string;
}

export const quoteStructure: IQuote = {
  quote: "",
  author: "",
  category: "",
};

export interface IDailyQuotes {
  quote: string | undefined;
  author: string | undefined;
  category: string | undefined;
}
