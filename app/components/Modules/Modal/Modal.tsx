import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContainer } from "@/Elements/Modal/modal";
import { bodyScroll } from "components/Utility/scroll";

interface Props {
  showModal: boolean;
  children?: React.ReactNode;
}
export const Modal: React.FC<Props> = ({ showModal, children }) => {
  if (!showModal) return null;
  useEffect(() => {
    bodyScroll("hidden");
  }, []);

  return createPortal(
    <ModalContainer>{children}</ModalContainer>,
    document.getElementById("modal")
  );
};
