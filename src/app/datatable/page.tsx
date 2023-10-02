import { Person, columns } from "@/components/DataTablePage/Columns";
import { DataTable } from "@/components/DataTablePage/DataTable";

async function getData(): Promise<Person[]> {
  // Fetch data from your API here.
  const data = await fetch("https://jsonplaceholder.typicode.com/comments");
  const res = await data.json();
  return res;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
