import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            priority={true}
            src="/Kitsune-whitout-blackground.png"
            alt="Kitsune Logo"
            width={300}
            height={100}
            className="w-44 md:w-56 pb-10 mb:pb-0 object-contain"
          />
        </Link>
        <h1 className="text-5xl"> SLAJARA </h1>
      </div>
      
    </header>
  );
}

export default Header;
