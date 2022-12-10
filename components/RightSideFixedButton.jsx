const RightSideFixedButton = () => {
  return (
    <aside className="fixed bottom-0 right-[4%] h-80 max-lg:hidden">
      <div className="grid h-full grid-rows-2 place-items-center">
        <div className="vertical-text text-sm text-gray-400 hover:text-secondary cursor-pointer">
          kamalsingh200238@gmail.com
        </div>
        <div className="h-24 w-[1px] self-end bg-gray-400" />
      </div>
    </aside>
  );
};

export default RightSideFixedButton;
