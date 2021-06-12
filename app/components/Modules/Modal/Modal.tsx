import { ModalContainer } from "@/Elements/Modal/modal";

interface Props {
  showModal: boolean;
  children?: React.ReactNode;
}
export const Modal: React.FC<Props> = ({ showModal, children }) => {
  return showModal ? <ModalContainer>{children}</ModalContainer> : null;
};
