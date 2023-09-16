const Ratings = ({ children, width, textColor }) => {
  const dynamicWidth = width || "100%";
  const dynamicTextColor = textColor || "text-white";
  return (
    <>
      <div
        className={`font-b w-${dynamicWidth} ${dynamicTextColor} flex justify-between px-3 sm:px-0`}
      >
        {children}
      </div>
    </>
  );
};

export default Ratings;
