import styled from "styled-components";

const FlexWrapper = styled.section`
  display: ${props => props.d};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  flex-direction: ${props => props.dir};
  flex-wrap: ${props => props.wrap};
`;

export default FlexWrapper;
