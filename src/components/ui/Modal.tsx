import React from 'react';
import styled from 'styled-components';

export const Modal = ({
    children,
    estado,
    cambiarEstado,
    titulo,
    mostrarHeader,
    mostrarOverlay,
    posicionModal,
    padding
}) => {
    return (
        <>
            {estado && (
                <Overlay
                    mostrarOverlay={mostrarOverlay}
                    positionModal={posicionModal}
                >
                    <ContenedorModal padding={padding}>
                        <EncabezadoModal>
                            {mostrarHeader && <h3>{titulo}</h3>}
                        </EncabezadoModal>
                        <ContenedorBotonCerrar>
                            <BotonCerrar onClick={() => cambiarEstado(false)}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-x'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                                </svg>
                            </BotonCerrar>
                        </ContenedorBotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            )}
        </>
    );
};

const size = {
    xs: '767px',
    sm: '768px',
};

const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
};

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${(props) =>
        props.mostrarOverlay ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) =>
        props.posicionModal ? props.posicionModal : 'center'};

    z-index: 10;
`;

const ContenedorModal = styled.div`
    @media ${device.xs} {
        max-width: 85%;
        max-height: 90vh;
        margin: 1rem 0;
    }
    @media ${device.sm} {
        max-width: 500px;
        max-height: 90vh;
        margin: 1rem 0;
    }
    overflow-y: overlay;
    min-height: 100px;
    background-color: ${(props) =>
        props.background ? props.background : '#212336'};
    position: relative;
    border-radius: 3px;
    box-shadow: 0 7px 29px 0 rgba(100, 100, 111, 0.2);
    padding: ${(props) => (props.padding ? props.padding : '20px')};
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:active {
        background-color: #999999;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-track:hover,
    &::-webkit-scrollbar-track:active {
        background: #d4d4d4;
    }
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;
    padding-bottom: 0px;
    font-family: 'Roboto', sans-serif;
    h3 {
        font-weight: 600;
        font-size: 16px;
        color: #1766dc;
`;

const BotonCerrar = styled.div`
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: all ease 0.3s;
    border-radius: 3px;
    color: #1766dc;
    &:hover {
        background: rgba(10, 10, 10, 0.6);
    }
    svg {
        width: 100%;
        height: 100%;
    }
`;

const ContenedorBotonCerrar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
`;
