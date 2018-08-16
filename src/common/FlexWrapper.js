import styled from "styled-components";

const FlexWrapper = styled.div`
  display: ${props => props.d || "flex"};
  flex-basis: ${props => props.fb || 1};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  flex-direction: ${props => props.dir};
  flex-wrap: ${props => props.wrap};
  order: ${props => props.order};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
`;

export default FlexWrapper;
