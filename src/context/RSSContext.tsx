import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { extract, extractFromXml } from "@extractus/feed-extractor";

const RSSContext = createContext<any>({});

function RSSProvider({ children }: any) {
  const [feedList, setFeedList] = useState<any>();
  const [currentFeed, setCurrentFeed] = useState<any>();
  const [rssAddress, setRSSAddress] = useState<string>("");

  useEffect(() => {
    const fileType = rssAddress.slice(-3);
    switch (fileType) {
      case "xml":
        fetch("http://localhost:3020/" + rssAddress)
          .then((res) => res.text())
          .then((text) => {
            console.log(`RSS Feed: ${extractFromXml(text).title}`);
            console.log(extractFromXml(text))
            setCurrentFeed(extractFromXml(text));
          });
        break;
      case "rss":
        fetch("http://localhost:3020/" + rssAddress, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => res.text())
          .then((text) => {
            console.log(`RSS Feed: ${extractFromXml(text)}`);
            console.log(extractFromXml(text));
            setCurrentFeed(extractFromXml(text));
          });
        break;
    }
  }, [rssAddress]);

  return (
    <RSSContext.Provider value={{ setRSSAddress, currentFeed }}>
      {children}
    </RSSContext.Provider>
  );
}

const useRSSContext = () => {
  return useContext(RSSContext);
};

export { RSSProvider, useRSSContext };
