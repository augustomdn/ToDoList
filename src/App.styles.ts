import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;
    width: 100vw;

    .test {
        opacity: 0.3;
        position: relative;
    }

    .spider-man {
        width: 800px;
    }
`;

export const Area = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
    position: absolute;
    z-index: 1;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    border-bottom 1px solid #777777;
    padding-bottom: 20px;                                                              
`;                     

export const Background = styled.div`
    display: flex;
    align-items: center;
`;



