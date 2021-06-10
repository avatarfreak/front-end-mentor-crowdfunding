import { SetStateAction } from "react";

export interface IProps {
    active: boolean;
    setActive: React.Dispatch<SetStateAction<boolean>>;
}