import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Spacer />
            </MainHeader>
        </header>
    );
};

const MainHeader = styled.div`
  padding: 26px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  gap: 8px;
  align-items: center;
`;

const LogoWrapper = styled.div`
    flex: 0 1 150px;
`
const Spacer = styled.div`
    flex: 0 1 150px;
`

const Nav = styled.nav`
    margin: 0 auto;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  margin-right: 48px;
  &:last-of-type {
    margin-right: 0px;
  }

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
