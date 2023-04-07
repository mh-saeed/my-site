"use client";

const Error = ({ error }: { error: any }) => {
  return <div>{error.message}</div>;
};
export default Error;
