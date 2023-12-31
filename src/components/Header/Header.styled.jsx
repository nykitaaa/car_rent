import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background: #4e93ba;
  box-shadow: rgba(0, 0, 0, 0.4) 4px 7px 10px;
`;

export const Nav = styled.nav`
  display: flex;
  max-width: 1440px;
  padding: 24px 128px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  display: flex;
  margin-left: auto;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 69px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;

  color: #fff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ff4d00;
  }

  &.active {
    color: #ff4d00;
    border: 2px solid #ff4d00;
    border-radius: 10px;
    padding: 4px 8px;
  }
`;

export const LogoStyled = styled(NavLink)`
  display: flex;

  font-family: 'Racing Sans One';
  font-size: 24px;
  font-weight: 400;

  color: #fff;
`;

export const Svg = styled.svg`
  width: 23px;
  height: 30px;
  margin-left: 10px;
`;
