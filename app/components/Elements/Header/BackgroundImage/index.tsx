import { prefix } from "@/Utility/prefix";
import styled from "styled-components";

const BackgroundImage = styled.div`
  //background: url({prefix "/images/image-hero-mobile.jpg"});
  background: url({prefix}/images/image-hero-mobile.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 37vh;
  filter: brightness(0.9);

  @media ${({ theme }) => theme.breakpoints.laptop} {
    background: url(${prefix}+"/images/image-hero-desktop.jpg");
    height: 400px;
  }
`;

export default BackgroundImage;
