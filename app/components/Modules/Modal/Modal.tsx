import { createPortal } from "react-dom";
import { ModalContainer } from "@/Elements/Modal/modal";

interface Props {
  showModal: boolean;
  children?: React.ReactNode;
}
export const Modal: React.FC<Props> = ({ showModal, children }) => {
  if (!showModal) return null;
  return createPortal(
    <ModalContainer>{children}</ModalContainer>,
    document.getElementById("modal")
  );
};
