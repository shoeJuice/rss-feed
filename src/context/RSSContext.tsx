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
    if (rssAddress != "") {
      fetch("http://localhost:3020/" + rssAddress)
        .then(async (res) => {
          let text = await res.text();
          console.log(text);
          return text;
        })
        .then((text) => {
          console.log(`RSS Feed: ${extractFromXml(text).title}`);
          console.log(extractFromXml(text));
          setCurrentFeed(extractFromXml(text));
        })
        .catch((err) => {
          console.log(err);
        });
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
