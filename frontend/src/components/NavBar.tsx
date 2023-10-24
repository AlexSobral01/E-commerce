import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between text-white bg-blue-600 p-4">
      <div className="font-semibold text-lg cursor-pointer">
        <h1>DEV</h1>
      </div>
      <ul className="hidden md:flex gap-6">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Products</Link></li>
        <li><Link href={'/'}>Categories</Link></li>
        <li><Link href={'/'}>Support</Link></li>
      </ul>
      <div className="flex gap-4">
        <button>
          <Link className="font-semibold px-5 hover:bg-blue-700 p-2 transition ease-in-out duration-500 rounded" href={'/'}>Entrar</Link>
        </button>
        <div>
          <Image className="hover:bg-blue-700 cursor-pointer" src='/cart.svg' height={30} width={30} alt="cart" />
        </div>
      </div>
    </nav>
  )
}
