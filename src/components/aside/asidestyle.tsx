import styled from "styled-components";
import { Link } from "react-router-dom";


export const Asideparent=styled.aside`
    width: 20%;
    height: 100vh;
    background-color:#14213d;
`
export const Asideheading=styled.h3`
    color: white;
    padding: 30px;
    border-bottom: 1px solid gray;
`
export const Itemsparen=styled.ul`
    width: 100%;
    padding: 20px;
`
export const Items=styled.li`
    margin: 20px 0;
    display: flex;
    height: 50px;
    align-items: center;
`
export const Icon=styled.i`
    font-size: 20px;
    color: white;
`
export const Linkstyle=styled(Link)`
    color: white;
    margin: 0 10px;
    text-decoration: none;
`