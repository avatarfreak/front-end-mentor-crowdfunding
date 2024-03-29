import { Card, Title, Text } from "@/Elements/Main/Project";
import React, { SetStateAction } from "react";
import Pledge from "./Pledges";

interface IProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  setParentId: React.Dispatch<SetStateAction<number>>;
}

export const Project: React.FC<IProps> = ({ setShowModal, setParentId }) => {
  return (
    <Card>
      <Title>About this project</Title>
      <Text>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
        screen to a more comfortable viewing height. Placing your monitor at eye level has the
        potential to improve your posture and make you more comfortable while at work, helping you
        stay focused on the task at hand.
      </Text>
      <Text>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
        your computer to allow notepads, pens, and USB sticks to be stored under the stand.
      </Text>
      <Pledge setShowModal={setShowModal} setParentId={setParentId} />
    </Card>
  );
};
