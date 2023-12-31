import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  /* justify-content: space-between;*/
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  
  
  &.active {
    color: red;
    border-bottom: 2px solid #2E6583;}

  /* Third Nav */
  justify-content: flex-start; 

  
`;

export const NavLink = styled(Link)`
  color: #A4A4A4;
  font-family: 'Poppins',sans-serif;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    color: red;
    border-bottom: 2px solid #2E6583;}

  &.active {
    color: #2E6583;;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
 
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
   width: 75vw;
  white-space: nowrap; 

  @media screen and (max-width: 768px) {
    display: none;
  }
  border-bottom: 1px solid #A4A4A4;
  &.active {
    color: red;
    border-bottom: 2px solid #2E6583;}
`;
