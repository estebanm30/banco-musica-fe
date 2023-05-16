import React from "react";
import RedirectButton from "../components/redirectButton/redirectButton";

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <RedirectButton redirectPath="/blogs">
        <p>Ir a Blog</p>
      </RedirectButton>
    </div>
  );
};

export default Home;
