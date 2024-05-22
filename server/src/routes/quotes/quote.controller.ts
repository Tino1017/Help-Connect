import { Request, Response } from "express";
import request from "request";
import mongoose from "mongoose";
import { keys } from "../../key/key";

const Quotes = mongoose.model("Quote");

type IQuotes = [
  {
    quote: string;
    author: string;
    category: string;
  }
];
async function HttpGetQuotesController(req: Request, res: Response) {
  try {
    const quotes: string[] = [
      "success",
      "education",
      "inspirational",
      "courage",
    ];

    // RANDOMLY PICKING INSPIRATION
    let success: string = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteApiResponse: IQuotes = await fetchQuoteFromAPI(success);

    if (!quoteApiResponse) {
      return res.json({
        message: "Something went wrong with getting the quote!!",
      });
    }

    const quoteObject = quoteApiResponse[0];

    const quote = await Quotes.findOne({ quote: quoteObject.quote });

    if (quote) {
      return res.json(quote);
    } else {
      const createQuote = new Quotes({
        quote: quoteObject.quote,
        author: quoteObject.author,
        category: quoteObject.category,
      });

      await createQuote.save();

      return res.json({ quote: quoteObject });
    }
  } catch (err) {
    return res.json({
      message: "An error occurred while fetching or saving the quote.",
    });
  }
}

async function fetchQuoteFromAPI(category: string): Promise<IQuotes> {
  return new Promise((resolve, reject) => {
    request.get(
      {
        uri: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        headers: {
          "X-Api-Key": keys.QUOTE_API_KEY,
        },
      },
      function (err: any, response: request.Response, body: any) {
        if (err || response.statusCode !== 200) {
          reject(err || response.statusCode);
        } else {
          resolve(JSON.parse(body));
        }
      }
    );
  });
}

export { HttpGetQuotesController };
