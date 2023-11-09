export const GridGenerator = () => {
  return (
    <>
      {Array.from(Array(10).keys()).map((itm, i) => (
        <GridItem key={i} itm={i} />
      ))}
      {Array.from(Array(10).keys()).map((itm, i) => (
        <GridItem key={i} itm={i} />
      ))}
    </>
  );
};

const GridItem = ({ itm }: { itm: number }) => {
  return (
    <div className="w-[10%]">
      <div
        className={`h-0 pb-[100%] border-l border-b border-slate-200 ${
          itm === 9 && 'border-r'
        }`}
      ></div>
    </div>
  );
};
