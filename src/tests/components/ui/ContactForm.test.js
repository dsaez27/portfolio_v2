import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { ContactForm } from '../../../components/ui/ContactForm';
import { Modal } from './../../../components/ui/Modal';
import { mount } from 'enzyme';

describe('Pruebas en <ContactForm />', () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null,
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    test('Debe de mostrarse el formulario', () => {
        const wrapper = render(<ContactForm />);
        expect(wrapper).toMatchSnapshot();
    });

    test('mostrar error en input nombre', async () => {
        const { findByLabelText, findByText, findByRole } = render(
            <ContactForm />
        );

        const inputName = await findByLabelText('Nombre');
        await act(async () => {
            fireEvent.change(inputName, { target: { value: '' } });
            fireEvent.submit(await findByRole('button'));
        });

        const error = await findByText('Nombre es requerido');
        expect(error).toBeInTheDocument();
    });

    test('mostrar error en input email', async () => {
        const { findByLabelText, findByText, findByRole } = render(
            <ContactForm />
        );

        const inputEmail = await findByLabelText('Email');

        await act(async () => {
            fireEvent.change(inputEmail, { target: { value: '' } });
            fireEvent.submit(await findByRole('button'));
        });

        const error = await findByText('Email es requerido');

        expect(error).toBeInTheDocument();
    });

    test('Mostrar error al ingresar email inválido', async () => {
        const { findByLabelText, findByText, findByRole } = render(
            <ContactForm />
        );
        const inputEmail = await findByLabelText('Email');
        await act(async () => {
            fireEvent.change(inputEmail, { target: { value: 'hola' } });
            fireEvent.submit(await findByRole('button'));
        });
        const error = await findByText('Por favor ingrese un email válido');
        expect(error).toBeInTheDocument();
    });
    test('mostrar error en input mensaje', async () => {
        const { findByLabelText, findByText, findByRole } = render(
            <ContactForm />
        );
        const inputMessage = await findByLabelText('Mensaje');
        await act(async () => {
            fireEvent.change(inputMessage, { target: { value: '' } });
            fireEvent.submit(await findByRole('button'));
        });
        const error = await findByText('Mensaje es requerido');
        expect(error).toBeInTheDocument();
    });

    test('Debe de enviar el formulario', async () => {
        const { findByLabelText, findByRole } = render(<ContactForm />);
        const inputName = await findByLabelText('Nombre');
        const inputEmail = await findByLabelText('Email');
        const inputMessage = await findByLabelText('Mensaje');
        await act(async () => {
            fireEvent.change(inputName, { target: { value: 'Juan' } });
            fireEvent.change(inputEmail, {
                target: { value: 'dssh27@gmail.com' },
            });
            fireEvent.change(inputMessage, { target: { value: 'Hola' } });
            fireEvent.submit(await findByRole('button'));
        });
        expect(inputName.value).toBe('Juan');
        expect(inputEmail.value).toBe('dssh27@gmail.com');
        expect(inputMessage.value).toBe('Hola');
    });

    test('Debe de mostrar modal de exito', async () => {
        const { findByLabelText, findByRole, findAllByText } = render(
            <ContactForm />
        );
        const { rerender } = render(<Modal cambiarEstado={false} />);

        const inputName = await findByLabelText('Nombre');
        const inputEmail = await findByLabelText('Email');
        const inputMessage = await findByLabelText('Mensaje');
        await act(async () => {
            fireEvent.change(inputName, { target: { value: 'Juan' } });
            fireEvent.change(inputEmail, {
                target: { value: 'dssh27@gmail.com' },
            });
            fireEvent.change(inputMessage, { target: { value: '0123456789' } });
            fireEvent.submit(await findByRole('button'));
        });

        rerender(<Modal cambiarEstado={true} />);

        expect(
            await findAllByText('Su mensaje ha sido enviado correctamente')
        ).toBeTruthy();
    });
});
