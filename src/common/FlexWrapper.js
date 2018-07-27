import styled from "styled-components";

const FlexWrapper = styled.div`
  display: ${props => props.d || "flex"};
  flex-basis: ${props => props.fb || 1};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  flex-direction: ${props => props.dir};
  flex-wrap: ${props => props.wrap};
  order: ${props => props.order || 0};
  margin-top: ${props => props.mt || 0};
  margin-bottom: ${props => props.mb || 0};
  margin-left: ${props => props.ml || 0};
  margin-right: ${props => props.mr || 0};
`;

export default FlexWrapper;
