import React from "react";
import Link from "next/link";

const fetchRepoContent = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/tolgattli/${name}/contents`,
    {
      next: {
        revalidate: 60, // 1 minute
      },
    }
  );
  const content = await response.json();
  return content;
};

const RepoDirs = async ({ name }) => {
  const dirs = await fetchRepoContent(name);
  // const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
