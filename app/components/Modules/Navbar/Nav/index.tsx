import { CollapsibleMenu, Menu } from "@/Elements/Header/Navbar/Nav/Menu";
import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import { MenuData } from "./data";
import { PrimaryMenu } from "./Menu";
import { MenuTrigger } from "./MenuTrigger";

export const Nav: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [links, _] = useState<string[]>(MenuData);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickDetection = (e: MouseEvent) => {
      const { current } = navRef;
      if (current && !current.contains(e.target as Node)) {
        setActive(!active);
      }
    };
    if (active) {
      window.addEventListener("click", clickDetection);
    }
    return () => {
      window.removeEventListener("click", clickDetection);
    };
  }, [active]);

  return (
    <>
      <MenuTrigger active={active} setActive={setActive} />

      <CollapsibleMenu ref={navRef}>
        <Menu active={active}>
          {links.map((link: string, idx: number) => (
            <PrimaryMenu key={idx} link={link} />
          ))}
        </Menu>
      </CollapsibleMenu>
    </>
  );
};
