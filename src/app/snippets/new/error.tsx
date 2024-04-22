interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
