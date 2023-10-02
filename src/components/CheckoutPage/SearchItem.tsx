import { Input } from "@/components/ui/input";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchItem = (props: Props) => {
  const { search, setSearch } = props;
  return (
    <form className="max-w-xs w-full mx-auto">
      <Input
        autoFocus
        type="text"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </form>
  );
};

export default SearchItem;
