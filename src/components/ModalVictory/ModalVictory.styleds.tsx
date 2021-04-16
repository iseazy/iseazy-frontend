
import styled from "styled-components/macro";

export const ModelRouteBackground = styled.div`
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
`;
export const ModalRouteContainer = styled.div`
  background: #f9f9f9;
  color: #3d3d3d;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
  padding: 32px;
  position: relative;
  width: auto;
  letter-spacing: -0.02em;
  border-radius: 8px;
  margin-top: 25vh;
  box-shadow: 0px 10px 15px #00000033;
  z-index: 100;
`;
export const ContentContainer = styled.div`
`
export const ButtonSection = styled.div`
    display:grid;
`

export const ClockIcon = styled.img`
    width: 32px;
    height: 32px;
`
export const TimeSection = styled.div`
display:inline-block;
`;
export const TimeText = styled.span`
    font-size:48px;
    font-weight: 600;
`
export const TextSection = styled.div`
    display:grid;
    justify-items:end;
    grid-template-columns: 1fr 1fr;
`