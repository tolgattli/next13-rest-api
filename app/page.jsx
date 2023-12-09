import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Tolga's World</h1>
      <ul>
        <li>
          {" "}
          <Link href={"/"}>Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/about"}>About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/about/team"}>Team</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
