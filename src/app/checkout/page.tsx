"use client";
import AddItem from "@/components/CheckoutPage/AddItem";
import Content from "@/components/CheckoutPage/Content";
import Footer from "@/components/CheckoutPage/Footer";
import Header from "@/components/CheckoutPage/Header";
import { useState, useEffect } from "react";
import { ItemProps } from "../../../types";
import SearchItem from "@/components/CheckoutPage/SearchItem";

const page: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>(
    JSON.parse(localStorage.getItem("shoppinglist") || "[]")
  );
  const [newItem, setNewItem] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
    setLoading(false);
  }, [items]);

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const addItem = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="flex flex-col h-screen">
      <Header items={items} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItem={handleAddItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      {loading ? (
        <div className="w-full flex-grow py-5 text-center">
          Loading Items...
        </div>
      ) : (
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
      <Footer items={items} />
    </div>
  );
};

export default page;
