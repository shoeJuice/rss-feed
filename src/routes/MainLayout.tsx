import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

/**
 * The main root layout of the application.
 */
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <h1>Hello World!</h1>
    </div>
  );
};

export default MainLayout;