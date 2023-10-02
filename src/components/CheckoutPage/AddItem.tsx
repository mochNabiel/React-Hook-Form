"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

interface Props {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleAddItem: (e: React.FormEvent) => void;
}

const AddItem = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { newItem, setNewItem, handleAddItem } = props;
  return (
    <form
      className="flex items-center w-full max-w-xs space-x-2 mx-auto my-3"
      onSubmit={(e) => handleAddItem(e)}
    >
      <Input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <Button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current?.focus()}
      >
        Add
      </Button>
    </form>
  );
};

export default AddItem;
