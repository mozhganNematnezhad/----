type searchProps = {
  search?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: any;
};

const Search = ({ setSearch, search, submitHandler }: searchProps) => {
  return (
    <form onSubmit={submitHandler}>
      <div className="w-[18rem] flex justify-start items-center text-muted mb-1 md:mb-0">
        <input
          type="search"
          value={search}
          placeholder="جستجو در عنوان..."
          className="text-sm border p-2  md:w-[16rem] w-[18rem] outline-[#066e48ad] rounded-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#066e48ad] text-white px-2 py-[0.4rem] rounded-sm text-sm p-2"
        >
          جستجو
        </button>
      </div>
    </form>
  );
};

export default Search;
