'use client'
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <Link href="/checkout">Checkout Page</Link>
      <Link href="/datatable">Data Table Page</Link>
      <Link href="/rhf">React Hook Form Page</Link>
    </div>
  );
};

export default Navbar;
