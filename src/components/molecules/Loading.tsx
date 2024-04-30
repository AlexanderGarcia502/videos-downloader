const Loading = () => {
  const text = "Loading...";

  return (
    <div className="flex justify-center items-center">
      <p className="text-white text-4xl font-semibold">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            className="animate-bounce"
          >
            {char}
          </span>
        ))}
      </p>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
  
          .animate-bounce {
            display: inline-block;
            animation: bounce 0.5s infinite alternate;
          }
          `}
      </style>
    </div>
  );
};

export default Loading;
