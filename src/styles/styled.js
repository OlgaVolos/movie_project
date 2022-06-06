import styled from "styled-components";
import {theme} from "../constants";

const HeaderWrapper = styled.header
    `
      height: 75px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${props => (props.theme === true) ? theme.blue : theme.lightBlue};
    `;

const PageWrapper = styled.div
    `
      display: flex;
      background: ${props => (props.theme === true) ? theme.dark.background : theme.light.background};
    `;

const CardsWrapper = styled.div
    `
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      height: 100vh;
      margin-top: 15px;
      row-gap: 20px;
    `;

const PagesBlock = styled.div
    `
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

const PageButton = styled.button
    `
      height: 50px;
      width: 100px;
      border: none;
      border-radius: 5px;
      background: #3e3f40;
      font-size: 20px;
      color: aliceblue;
      cursor: pointer;
      margin: 0 30px;
    `;

const Title = styled.div
    `
      text-align: center;
      color: ${props => (props.theme === true) ? theme.white : theme.black};
    `;

export {
    HeaderWrapper,
    PageWrapper,
    CardsWrapper,
    PagesBlock,
    PageButton,
    Title
};

