interface ILoading {
  className?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  m?: string;
}

const Loading = (props: ILoading) => {
  const { className, mt = "0", mb = "0", ml = "0", mr = "0", m = "0" } = props;

  const text = "Loading...";

  return (
    <div className={`flex justify-center items-center mt-${mt} mb-${mb} ml-${ml} mr-${mr} m-${m}`}>
      <p className={`text-white text-4xl font-semibold ${className}`}>
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
