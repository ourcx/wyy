import styled from "styled-components";

export const DIscoverHeader = styled.div`
  display: flex;
  align-items: center;
  height: 33px;
  padding: 0 10px;
  background-color: ${props => props.theme.color.primary};
  justify-content: center;
  gap: 2rem; /* 原 5rem 过大，调整为适中间距 */

  .item a {
    color: #fff;
    text-decoration: none;
    width: 2rem;
    padding: .3rem .5rem;
    transition: all 0.2s;

    &.active {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
    }

    &:hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 20px;
    }
  }
`;