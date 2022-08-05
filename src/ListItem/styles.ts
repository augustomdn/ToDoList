import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: ${done? '#98ff9b' : '#CCC'};
        text-decoration: ${done? 'underline' : 'initial'};
    }

`
));