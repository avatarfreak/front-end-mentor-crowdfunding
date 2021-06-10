import styled from "styled-components";

export const ProgressContainer = styled.div`
  progress {
    appearance: none;
    width: 100%;
    height: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    color: var(--cyan);

    &::-webkit-progress-bar {
      background-color: #eee;
    }
    &::-webkit-progress-value {
      border-radius: 1rem;
      background: var(--cyan);
    }
    &::-moz-progress-bar {
      border-radius: 1rem;
      background: var(--cyan);
    }
  }
`;
