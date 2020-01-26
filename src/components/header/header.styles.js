import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    position: relative;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
`;

export const NavContainer = styled.ul`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: -15px;
`;

export const NavItem = styled.li`
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
`;