import React from "react";
import styled, { css } from "styled-components";

const ScButton = styled.div`
    padding: 1rem 15px;
    border: 0;
    cursor: pointer;
    background: var(--color-bg-dark);
    color: var(--color-bg-dark-text);
    font-weight: var(--fw-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: var(--color-brand-alt);
        color: var(--color-text-1);
    }

    ${(props) =>
        props.outline &&
        css`
            border: 1.5px solid var(--color-bg-dark);
            color: var(--color-bg-dark);
            background: 0;
            transition: 0.4s ease;

            &:hover {
                background: var(--color-bg-dark);
                color: var(--color-bg-dark-text);
            }
        `};
`;

const Button = ({ outline, children, onClick, type }) => {
    return (
        <ScButton outline={outline} onClick={onClick} type={type || "button"}>
            {children}
        </ScButton>
    );
};

export default Button;

// HOW TO USE:
// <Button>just button</Button>
//<Button outline> outline button</Button>
