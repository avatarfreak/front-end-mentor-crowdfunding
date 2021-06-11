import { useState } from "react";
import { Project } from "./Project";
import { Monitor } from "./Monitor";
import { Statistics } from "./Stat";
import { Modal } from "../Modal/Modal";

export const Content = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Modal showModal={showModal}>
        <button onClick={() => setShowModal(false)}>close</button>
      </Modal>

      <Monitor setShowModal={setShowModal} />
      <Statistics />
      <Project setShowModal={setShowModal} />
    </>
  );
};
