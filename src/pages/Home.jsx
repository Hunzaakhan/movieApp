import Search from "./Search";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Search />
        <Movies />
      </div>
    </>
  );
};

export default Home;
