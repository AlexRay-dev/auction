import React, {FC} from 'react';
import {MainContainer} from './core/styled-components/main-container';
import {GlobalStyle} from "./core/styled-components/global";
import Auction from "./components/auction/auction";

const App: FC = () => {
  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <Auction/>
      </MainContainer>
    </>
  );
};

export default App;