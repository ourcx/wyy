import styled from "styled-components";

export const DIscoverHeader = styled.div`
  display: flex;
  align-items: center;
  height: 33px;
  background-color: ${props => props.theme.color.primary};
  gap: 3.5rem;
  padding-left: 22%;

  .item a {
    color: #fff;
    text-decoration: none;
    width: 2rem;
    padding: .3rem .5rem;
    transition: all 0.2s;
    flex: 1;

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