import React, {FC, useEffect, useState} from 'react';
import {
  AuctionTableItemPrice,
  StyledAuctionTable,
} from "./styled";
import {useTypedSelector} from "../../core/hooks/redux";
import {selectAuction} from "../../core/store/reducers/auctionSlice/auctionSlice";
import {useActions} from "../../core/hooks/useActions";
import {AUCTION_ID} from "../../core/config";
import {getTimerOptions} from "../timer/utils";
import Timer from "../timer/timer";
import {ITimerOptions} from "../timer/interface";
import {timerInitialState} from "../timer/consts";

const AuctionTable: FC = () => {
  const {fetchAuction} = useActions();
  const {auction} = useTypedSelector(selectAuction);
  const {participators, startedAt} = auction;
  const [auctionTimer, setAuctionTimer] = useState<ITimerOptions>(timerInitialState);

  useEffect(() => {
    fetchAuction(AUCTION_ID);
  }, []);

  useEffect(() => {
    setAuctionTimer(getTimerOptions(participators.length, startedAt));

    const timerId = setInterval(() => {
      setAuctionTimer(getTimerOptions(participators.length, startedAt));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [participators.length, startedAt]);

  return (
    <>
      <StyledAuctionTable>
        <thead>
        <tr>
          <th>Ход</th>
          {participators.map((item, index) =>
            <th key={item._id}>
              {auctionTimer.currentParticipatorIndex === index ? <Timer timerValue={auctionTimer.timerValue}/> : null}
            </th>
          )}
        </tr>
        <tr>
          <th>Параметры и требования</th>
          {participators.map(({_id, name}) =>
            <th key={_id}>{name ? name : 'UNKNOWN'}</th>
          )}
        </tr>
        </thead>

        <tbody>
        <tr>
          <td>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
          {participators.map(({_id, measuresThatRaisingQuality}) =>
            <td key={_id}>{measuresThatRaisingQuality ? 'есть' : '-'}</td>
          )}
        </tr>
        <tr>
          <td>Срок изготовления лота, дней</td>
          {participators.map(({_id, productionTime}) =>
            <td key={_id}>{productionTime ? productionTime : '-'}</td>
          )}
        </tr>
        <tr>
          <td>Гарантийный обязательства, мес</td>
          {participators.map(({_id, guarantee}) =>
            <td key={_id}>{guarantee ? guarantee : '-'}</td>
          )}
        </tr>
        <tr>
          <td>Условия оплаты</td>
          {participators.map(({_id, payment}) =>
            <td key={_id}>{payment ? payment : '-'}</td>
          )}
        </tr>
        <tr>
          <td>Стоимость изготовления лота, руб. (без НДС)</td>
          {participators.map(({_id, price}) =>
            <AuctionTableItemPrice key={_id}>
              {price.map((item, index) =>
                <div key={index}>{item}</div>
              )}
            </AuctionTableItemPrice>
          )}
        </tr>
        <tr>
          <td>Действия</td>
          {participators.map(({_id, actions}) =>
            <td key={_id}>{actions ? actions : '-'}</td>
          )}
        </tr>
        </tbody>
      </StyledAuctionTable>
    </>
  );
};

export default AuctionTable;