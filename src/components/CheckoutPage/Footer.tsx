import { ItemProps } from "../../../types";

interface Props {
  items: ItemProps[];
}

const Footer = (props: Props) => {
  const { items } = props;
  return (
    <footer className="h-16 py-5 bg-gray-900 text-white flex items-center justify-center text-2xl">
      {items.length ? (
        <p>There are {items.length} items</p>
      ) : (
        <p>There are no item</p>
      )}
    </footer>
  );
};

export default Footer;
