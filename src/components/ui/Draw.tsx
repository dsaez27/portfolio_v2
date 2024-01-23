import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { helperImages } from "../../helpers/helperImages";

export const Draw = () => {
    return (
        <>
            <DrawContainer>
                <Fade direction="bottom" duration="2000" triggerOnce={true}>
                    <Moon src={helperImages("./moon.webp").default} alt="moon" />
                </Fade>

                <Fade direction="left" duration="2000" triggerOnce={true}>
                    <Boy src={helperImages("./boy.webp").default} alt="boy" />
                </Fade>
            </DrawContainer>
        </>
    );
};

const DrawContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Moon = styled.img`
    transform: translate(100px, 0px);
    width: 120px;
    height: 120px;

    @media (max-width: 768px) {
        transform: translate(120px, 0px);
    }
`;

const Boy = styled.img`
    transform: translate(-100px, 50px);
    width: 100px;
    height: 300px;

    @media (max-width: 768px) {
        transform: translate(-100px, 0px);
    }
`;
