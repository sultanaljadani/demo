import styled from 'styled-components'

 /**Master Layout Page styled-components */
 export const StylHeader = styled.header`
    background-color: #cccccc;
    width: 100%;
    min-height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

/**Products Page Styled-components */
export const StyleImg = styled.img`
  width:auto;
  height: 100%;
  `
export const VatText = styled.p`
    text-align:center;
    font-size: 10px; 
    color: #979797;
  `;
 export const PriceText = styled.h4`
    text-align:center;
    font-size: 20px; 
    color: red;
  `;
 