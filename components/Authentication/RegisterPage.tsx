import React, {Fragment, useEffect, useContext, useState} from 'react';
import { Dialog, Transition } from "@headlessui/react";

import Image from 'next/Image'
import Link from 'next/Link'

import TextLink from "../UI/TextLink";
import TextField from "../UI/TextField";

interface SocialButtonProps {
    social: string;
}

const SocialButton = (props:SocialButtonProps) => {
    var social = props.social
    var alt = social[0].toUpperCase() + social.substring(1)

    return (
        <div>
            <a href="#">
                <Image
                    src={`/icons/${social}.png`}
                    alt={alt}
                    width={60}
                    height={60}
                />
            </a>
        </div>
    );
}

const RegisterForm = () => {
    const [formError, setFormError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const registerUser = async event => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/auth/signup', {
                body: JSON.stringify({
                  name: event.target.name.value,
                  surname: event.target.surname.value,
                  email: event.target.email.value,
                  password: event.target.password.value,
                  confirmPassword: event.target.confirmPassword.value
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
            })

            const data = await response.json();

            setEmailError("");
            setPasswordError("");

            data.errors.forEach((error) => {
                if(error.param === "email")
                    setEmailError(error.msg);
                else if(error.param === "password" || error.param === "confirmPassword")
                    setPasswordError(error.msg);
                else
                setEmailError(error.msg);
            });
        }
        catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <div className="flex-col antialiased">
                <form onSubmit={registerUser}>
                    <div className="space-y-6">
                        {/* TITLE */}
                        <div>
                            <div className="text-3xl">
                                Criar uma conta
                            </div>

                            <div className="flex space-x-1 text-sm">
                                <span className="text-gray-500">Já tem uma conta?</span> <TextLink text="Faça login." link="/login"/>
                            </div>
                        </div>

                        {/* SOCIAL REGISTER */}
                        <div className="space-y-2">
                            <div className="text-lg font-black text-gray-500">
                                Entre com as redes sociais
                            </div>

                            <div className="flex space-x-4">
                                <SocialButton social="facebook"/>
                                <SocialButton social="google"/>
                                <SocialButton social="apple"/>
                            </div>
                        </div>

                        {/* DIVIDER */}
                        <div className="text-center">
                            <span>Ou</span>
                        </div>


                        {/* EMAIL REGISTER */}
                        <div className="space-y-4">
                            <div className="text-lg font-black text-gray-500">
                                Inscrever-se com email
                            </div>

                            <div className="space-y-1">
                                <div className="text-sm text-gray-500">
                                    Endereço de email
                                </div>
                                <TextField name="email" type="text" autoComplete="email"/>
                                <div className="text-xs font-black text-red-500">
                                    {emailError}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="col-span-1">
                                        <div className="text-sm text-gray-500">
                                            Nome
                                        </div>
                                        <TextField name="name" type="text" autoComplete="name"/>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="text-sm text-gray-500">
                                            Sobrenome
                                        </div>
                                        <TextField name="surname" type="text" autoComplete="surname"/>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-sm text-gray-500">
                                    Senha
                                </div>
                                <TextField name="password" type="password"/>
                                <div className="text-xs font-black text-red-500">
                                    {passwordError}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-sm text-gray-500">
                                    Repetir senha
                                </div>
                                <TextField name="confirmPassword" type="password"/>
                            </div>

                            <div className="text-gray-500 text-sm">
                                <span>Ao clicar em Criar conta, eu concordo que li e aceito os </span>
                                <TextLink text="Termos de uso" link="/terms-of-service"/>
                                <span> e a </span>
                                <TextLink text="Política de privacidade" link="/privacy-policy"/>
                                <span>.</span>
                            </div>

                            <div className="col-span-3">
                                <div className="flex items-center space-x-4">
                                <button type="submit" className="bg-primary hover:bg-primary-hover text-gray-100 rounded-xl px-2 py-1"><span className="font-bold">Criar conta</span></button>
                                    <TextLink text="Voltar" link="/"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const RegisterPage = () => {
    return (
        <div>
            <RegisterForm/>
        </div>
    );
}

export default RegisterPage;