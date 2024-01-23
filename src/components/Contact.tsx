import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

interface FormValues {
    name: string;
    email: string;
    message: string;
    reCaptchaValue: string | null;
}

const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es requerido"),
    email: Yup.string().email("Invalid email").required("Email es requerido"),
    message: Yup.string().required("Mensaje es requerido"),
});

const site_key: string = "6LeAG4slAAAAAN0ER59FUnK102kZi3hcn-9sDHtC";

const Contact = () => {
    const [serverError, setServerError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [reCaptchaValue, setReCaptchaValue] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: yupResolver(ContactSchema),
    });

    const reCaptchaRef = useRef<ReCAPTCHA>(null);

    const { mutate, status } = useMutation(
        async (data: FormValues) => {
            const response = await axios.post(
                "http://localhost:5001/submit-form",
                {
                    ...data,
                    reCaptchaValue,
                }
            );

            if (!response.data.success) {
                throw new Error("Something went wrong");
            }
        },
        {
            onSuccess: () => {
                setServerError(null);
                setSuccess(true);
                reset();
                reCaptchaRef.current?.reset();
            },
            onError: (error: Error) => {
                setServerError(error.message);
                setSuccess(false);
            },
        }
    );

    const onChange = (value: string | null) => {
        setReCaptchaValue(value);
    };

    const onSubmit = (data: FormValues) => {
        if (reCaptchaValue) {
            mutate(data);
        } else {
            setServerError("Por favor verifica que no eres un robot");
        }
    };

    return (
        <section id="contact" className="h-full w-full">
            <h2 className="after-content-[''] text-3xl font-semibold text-primary after:mt-1  after:block after:h-1 after:w-20 after:bg-primary">
                Contacto
            </h2>
            <form
                onSubmit={handleSubmit((data) => onSubmit(data))}
                className="my-10 flex w-1/2 flex-col items-start gap-2 max-md:w-full"
            >
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Nombre"
                    id="name"
                    className={`form-input h-10 w-full bg-quaternary p-2 text-sm text-white focus:outline-none ${
                        errors.name ? "border-red-500" : ""
                    }`}
                />
                {errors.name && (
                    <p className="text-xs italic text-primary">
                        {errors.name.message}
                    </p>
                )}
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    id="email"
                    className={`form-input h-10 w-full bg-quaternary p-2 text-sm text-white autofill:bg-quaternary focus:outline-none ${
                        errors.email ? "border-red-500" : ""
                    }`}
                />
                {errors.email && (
                    <p className="text-xs italic text-primary">
                        {errors.email.message}
                    </p>
                )}

                <textarea
                    {...register("message")}
                    id="message"
                    placeholder="Mensaje"
                    rows={5}
                    cols={50}
                    className={`form-textarea w-full bg-quaternary p-2 text-sm text-white focus:outline-none ${
                        errors.message ? "border-primary" : ""
                    }`}
                />
                {errors.message && (
                    <p className="text-xs italic text-primary">
                        {errors.message.message}
                    </p>
                )}

                <ReCAPTCHA
                    sitekey={site_key}
                    onChange={onChange}
                    ref={reCaptchaRef}
                    theme="dark"
                />

                {serverError && (
                    <p className="mb-6 text-xs italic text-red-500">
                        {serverError}
                    </p>
                )}

                {success === true && (
                    <p className="mb-6 text-xs italic text-green-500">
                        Message sent successfully!
                    </p>
                )}

                <button
                    type="submit"
                    className={`z-10 inline bg-primary p-4 text-sm font-semibold text-white duration-500 ease-in-out hover:bg-opacity-80
                    ${
                        status === "loading"
                            ? "cursor-not-allowed opacity-50"
                            : ""
                    }`}
                    disabled={status === "loading"}
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;
