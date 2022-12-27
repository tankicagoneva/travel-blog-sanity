import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/">
          <Image src={logo} alt="Travel logo" width={100} height={100} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
