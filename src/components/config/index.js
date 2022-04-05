import React from "react";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const config = () => {
  return <div></div>;
};

export default config;
