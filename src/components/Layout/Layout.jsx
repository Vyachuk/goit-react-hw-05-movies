import { Header } from 'components/header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ContentWrapper = styled.main`
  padding: 0px 20px;
`;

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Suspense>
    </>
  );
};
