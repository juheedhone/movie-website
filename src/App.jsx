import Search from "./component/Search";

const App = () => {
  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the hassle
          </h1>
        </header>

        <Search />
      </div>
    </main>
  );
};

export default App;
