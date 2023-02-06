import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container pt-3 pb-3">
      <div className="d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" href="/">
          <Image src="/pokeball.png" alt="pokemon" width={50} height={50} />
        </Link>
        <a className="nav-link active text-white" aria-current="page" href="/">
          Home
        </a>
      </div>
    </div>
  );
}
