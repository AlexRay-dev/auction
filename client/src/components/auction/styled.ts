import styled from "styled-components";

export const AuctionHeader = styled.div`
  padding-bottom: 15px;
`;
export const AuctionTitle = styled.h2`
  color: ${({theme}) => theme.colors.primary};
  font-size: 26px;
  padding: 10px 0;
`;
export const AuctionSubtitle = styled.h3`
  display: inline-block;
  padding: 5px;
  color: ${({theme}) => theme.colors.primary};
  font-size: 14px;
  background-color: #f9f2f4;
  border-radius: 3px;
`;
export const StyledAuctionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    border-bottom: 2px solid #c6c6c6;
    th {
      padding: 5px 10px;
      font-size: 18px;
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.secondary};
    }
  }

  tbody {
    td:nth-child(1) {
      padding: 5px 15px;
      text-align: left;
    }
    td:first-child {
      white-space: inherit;
    }
    td {
      padding: 5px 15px;
      text-align: center;
      font-weight: 400;
      white-space: nowrap;
    }
    tr:nth-child(odd) {
      background-color: #f4f4f4;
    }
  }
`;
export const AuctionTableItemPrice = styled.td`
  div:nth-child(1) {
    color: ${({theme}) => theme.colors.blue};
  }
  div:nth-child(2) {
    color: ${({theme}) => theme.colors.red};
  }
  div:nth-child(3) {
    color: ${({theme}) => theme.colors.green};
  }
`;
