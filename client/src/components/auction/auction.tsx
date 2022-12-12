import React, {FC} from 'react';
import {useTypedSelector} from "../../core/hooks/redux";
import {AuctionHeader, AuctionSubtitle, AuctionTitle} from "./styled";
import {Divider} from "../../core/styled-components/divider";
import AuctionTable from "./auction-table";
import {selectAuction} from "../../core/store/reducers/auctionSlice/auctionSlice";

const Auction: FC = () => {
  const {auction, isLoading} = useTypedSelector(selectAuction);

  return (
    <>
      <AuctionHeader>
        <AuctionTitle>Ход торгов {isLoading ? '...загрузка лота' : auction.name}</AuctionTitle>
        <Divider/>
        <AuctionSubtitle>
          Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:
        </AuctionSubtitle>
      </AuctionHeader>

      <AuctionTable/>
    </>
  )
};

export default Auction;