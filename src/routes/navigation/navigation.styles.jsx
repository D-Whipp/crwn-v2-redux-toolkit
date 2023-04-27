import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    display: inline;
`;

export const WebsiteName = styled.div`
    font-size: 48px;
    line-height: 1.4;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 600;
    word-spacing: 4px;
    letter-spacing: 1.2px;
    margin: auto 0;
    margin-right: auto;
    padding: 12px;
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
