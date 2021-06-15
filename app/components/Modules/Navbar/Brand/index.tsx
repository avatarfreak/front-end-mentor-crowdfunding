import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/Elements/Header/Navbar/Brand";
import { prefix } from "@/Utility/prefix";

const Logo: React.FC<React.ReactNode> = () => {
  return (
    <Brand>
      <Link href="/">
        <a>
          <Image
            width="128"
            height="20"
            src={`${prefix}/images/logo.svg `}
            alt="crowdfunding Logo"
          />
        </a>
      </Link>
    </Brand>
  );
};

export default Logo;
