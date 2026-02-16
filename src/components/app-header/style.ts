import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1}
  }
`;