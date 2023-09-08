import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-amber-400 container rounded-2xl mx-10 py-16">
        <div className="flex justify-center pb-2 lg:pb-5">
          <p className="font-semibold font-serif text-black text-center sm:text-xl lg:text-4xl mb-5">
            Welcome to RSP Game, have a nice play!
            <br />
            <p className="font-normal font-serif text-black text-center sm:text-xl lg:text-3xl mt-5">
              Please select the mode below
            </p>
          </p>
        </div>
        <div className="flex justify-center mt-3 lg:mt-5">
          <Link to="/computer">
            <button className="btn btn-active btn-primary flex justify-center mr-5 sm:mr-0 lg:mr-16">
              VS Computer
            </button>
          </Link>
          <Link to="/multiplayer">
            <button className="btn btn-active btn-primary flex justify-center">
              2 Player
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
