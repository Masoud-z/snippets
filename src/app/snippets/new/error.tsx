"use client";
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error }: Props) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
