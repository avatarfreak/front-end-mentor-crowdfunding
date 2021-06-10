import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/Elements/Header/Navbar/Brand";

const Logo: React.FC<React.ReactNode> = () => {
  return (
    <Brand>
      <Link href="/">
        <a>
          <Image width="128" height="20" src="/images/logo.svg" />
        </a>
      </Link>
    </Brand>
  );
};

export default Logo;
