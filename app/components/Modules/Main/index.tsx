import { useState } from "react";
import { Project } from "./Project";
import { Monitor } from "./Monitor";
import { Statistics } from "./Stat";
import { Modal } from "../Modal/Modal";
import { ModalContent } from "./ModalContent";
import { ModalPledge } from "./ModalContent/pledges";

export const Content = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [parentId, setParentId] = useState<number>(0);

  return (
    <>
      <Modal showModal={showModal}>
        <ModalContent setShowModal={setShowModal}>
          <ModalPledge parentId={parentId} setShowModal={setShowModal} />
        </ModalContent>
      </Modal>

      <Monitor setShowModal={setShowModal} />
      <Statistics />
      <Project setShowModal={setShowModal} setParentId={setParentId} />
    </>
  );
};
