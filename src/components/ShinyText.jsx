import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={'bg-white font-bold flex justify-center items-center p-2 rounded-full'}>
      <div
        className={`shiny-text ${disabled ? 'disabled' : ''} ${className}   `}
        style={{ animationDuration }}
      >
        {text}
      </div>
    </div>
  );
};

export default ShinyText;
