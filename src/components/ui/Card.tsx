import React from "react";
import styled from "styled-components";

export const Card = ({ title, description, image, link, technologies }) => {
    return (
        <>
            <CardContainer>
                <CardImage src={image} alt={title} />
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardTechnologies>
                        {technologies.map((technology, index) => {
                            return (
                                <CardTechnologyItem key={index}>
                                    {technology}
                                </CardTechnologyItem>
                            );
                        })}
                    </CardTechnologies>
                </CardContent>
            </CardContainer>
        </>
    );
};

const CardContainer = styled.div`
    border: 0px solid aqua;
    cursor: pointer;
    position: relative;
    height: 12rem;
    overflow: hidden;
    border-radius: 3px;
    flex: 1;
    min-width: 260px;
    box-shadow: 0 0 1rem rgb(0 0 0 / 50%);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0)
            linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 30%,
                rgb(0 0 0 / 30%) 70%
            );
        z-index: 0;
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 3s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    z-index: -1;
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    * {
        z-index: 1;
    }
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    color: #fff;
    margin: 0.5rem 0;
    font-weight: 300;
`;

const CardDescription = styled.p`
    font-size: 0.8rem;
    color: #fff;
    padding: 0;
    font-weight: 300;
`;

const CardTechnologies = styled.div`
    padding: 0;
`;

const CardTechnologyItem = styled.span`
    display: inline-block;
    margin: 0 0.5rem 0 0;
    padding: 0.2rem 0.3rem;
    border-radius: 3px;
    background: #f44653;
    color: #fff;
    font-size: 0.7rem;
`;
