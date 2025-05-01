import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}

      <footer className="mt-16 text-sm text-gray-500">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/ammar-ghalwash-80aa70277/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-base hover:underline"
        >
          Ammar Ghalwash
        </a>
      </footer>
    </div>
  );
}

export default Home;
