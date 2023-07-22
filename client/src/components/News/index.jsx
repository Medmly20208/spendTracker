import React, { useEffect, useState } from "react";

//components
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";
import NewsCard from "./NewsCard";

//axios
import axios from "axios";

//utils
import { getCurrentDate, addDays } from "../../utils";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        ` https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&published_after=${addDays(
          getCurrentDate(),
          -2
        )}T00:00&api_token=${import.meta.env.VITE_API_NEWS_TOKEN}`
      )
      .then((res) => {
        setNews(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CardContainer>
      <SectionTitle title={"Lastest News"} className={"!text-left "} />
      {!isLoading && news.length === 0 && (
        <p className="mt-[10px]">No news for today</p>
      )}
      {isLoading && <p className="mt-[10px]">is loading</p>}
      <div className="flex gap-2 flex-wrap mt-[30px]">
        {news?.map((news) => {
          return (
            <NewsCard
              key={news.uuid}
              image={news.image_url}
              link={news.url}
              title={news.title}
              snippet={news.snippet}
            />
          );
        })}
      </div>
    </CardContainer>
  );
};

export default News;
