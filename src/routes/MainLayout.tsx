import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { useRSSContext } from "../context/RSSContext";

/**
 * The main root layout of the application.
 */
const MainLayout = () => {
  const { setRSSAddress, currentFeed } = useRSSContext();
  return (
    <div>
      <Navbar />
      <Searchbar />

      {currentFeed && (<div>
        <h1>{currentFeed.title}</h1>
        <h2><a href={currentFeed.link}>{currentFeed.link}</a></h2>
        <div>
            <h1><strong>Entries</strong></h1>
            {currentFeed.entries?.map((entry: any, id: any) => {
                return(<div style={{padding: 3}} key={id}>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <a href={entry.link}>Read More</a>
                </div>)
            })}
        </div>
      </div>)}
    </div>
  );
};

export default MainLayout;
