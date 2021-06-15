import { ImageWrapper } from "@/Elements/Header/Navbar/Nav/Menu";
import Image from "next/image";
import { IProps } from "./type";

export const MenuTrigger: React.FC<IProps> = ({ active, setActive }) => {
  return (
    <>
      <ImageWrapper onClick={() => setActive((prev) => !prev)}>
        {!active ? (
          <Image width="15" height="15" src="/images/icon-hamburger.svg" alt="hamburger menu" />
        ) : (
          <Image width="15" height="15" src="/images/icon-close-menu.svg" alt="close menu icon" />
        )}
      </ImageWrapper>
    </>
  );
};
