import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from './Modal';
import styled from 'styled-components';
import { helperImages } from '../../helpers/helperImages';
import { Rotate } from 'react-awesome-reveal';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required('Nombre es requerido'),
    email: yup
        .string()
        .email('Por favor ingrese un email válido')
        .required('Email es requerido'),
    message: yup
        .string()
        .required('Mensaje es requerido')
        .min(10, 'Mínimo 10 caracteres')
        .max(100, 'Máximo 100 caracteres'),
});

export const ContactForm = () => {
    const [estadoModal, setEstadoModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        axios
            .post('/contact', data)
            .then((res) => {
                setEstadoModal(true);
                reset();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id='form-validation'>
                <label htmlFor='name'>Nombre</label>
                <input
                    id='name'
                    type='text'
                    placeholder='Nombre y apellido'
                    {...register('name')}
                />
                <p>{errors.name?.message}</p>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    placeholder='Email'
                    {...register('email', {
                        required: true,
                    })}
                />
                <p>{errors.email?.message}</p>
                <label htmlFor='message'>Mensaje</label>
                <textarea
                    id='message'
                    placeholder='Mensaje'
                    rows='10'
                    cols='50'
                    {...register('message')}
                />
                <p>{errors.message?.message}</p>
                <button type='submit'>Enviar</button>
            </form>

            <Modal
                estado={estadoModal}
                cambiarEstado={setEstadoModal}
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'center'}
                padding={'4rem 2rem 1rem'}
            >
                <Contenido>
                    <Rotate>
                        <img
                            src={helperImages('./check.webp').default}
                            alt='check'
                        />
                    </Rotate>
                    <Titulo>Éxito</Titulo>
                    <p>Su mensaje ha sido enviado correctamente</p>
                    <Boton onClick={() => setEstadoModal(false)}>Aceptar</Boton>
                </Contenido>
            </Modal>
        </>
    );
};

const Boton = styled.div`
    display: block;
    padding: 10px 30px;
    border-radius: 100px;
    border: none;
    background: #1766dc;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s ease all;
    color: #fff;
    &:hover {
        background: #0066ff;
    }
`;

const Contenido = styled.div`
    text-align: center;
    p {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

const Titulo = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 20px;
`;
