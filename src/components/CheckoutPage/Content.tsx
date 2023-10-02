import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { AiOutlineDelete } from "react-icons/ai";
import { ItemProps } from "../../../types";

interface Props {
  items: ItemProps[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Content = (props: Props) => {
  const { items, handleCheck, handleDelete } = props;

  return (
    <main className="w-full flex-grow my-5 overflow-y-scroll">
      {!items.length && (
        <p className="w-full text-center">There are no item.</p>
      )}
      <ul className="w-full flex flex-col items-center justify-center space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="w-[80%] max-w-md flex justify-between items-center px-10 py-7 rounded-xl border-gray-200 shadow-md"
          >
            <div className="flex space-x-2 items-center">
              <Checkbox
                id={item.id.toString()}
                checked={item.checked}
                onClick={() => handleCheck(item.id)}
              />
              <Label
                htmlFor={item.id.toString()}
                className="cursor-pointer text-xl"
              >
                {item.item}
              </Label>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="text-2xl">
                  <AiOutlineDelete />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDelete(item.id)}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
