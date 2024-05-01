interface IErrMessage {
  message: string | null;
  className?: string;
}

const ErrorMessage = ({ className, message }: IErrMessage) => {
  return (
    <h2 className={`text-white text-4xl font-semibold ${className}`}>
      {message}
    </h2>
  );
};

export default ErrorMessage;
