import SearchInput from "./SearchInput";

const App = () => {
  return (
    <div
      className="flex  flex-col w-full bg-blue-900 justify-center mr-6"
      dir="ltr">
      <div className=" flex flex-col w-full h-screen   ">
        <SearchInput placeholder="search" />
      </div>
    </div>
  );
};
export default App;
