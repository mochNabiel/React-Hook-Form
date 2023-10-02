import { ItemProps } from "../../../types";

interface Props {
  items: ItemProps[];
}

const Header = (props: Props) => {
  const { items } = props;
  return (
    <header className="h-16 py-5 bg-gray-900 text-white flex items-center justify-center text-2xl">
      <p>You've checked {items.filter((item) => item.checked).length}</p>
    </header>
  );
};

export default Header;
