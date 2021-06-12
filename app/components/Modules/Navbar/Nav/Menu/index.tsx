import { Item } from "@/Elements/Header/Navbar/Nav/Menu";
import Link from "next/link";

export const PrimaryMenu: React.FC<{ link: string }> = ({ link }) => {
  return (
    <>
      <Item>
        <Link href="#">
          <a>{link}</a>
        </Link>
      </Item>
    </>
  );
};
