import { useState } from "react";
import LabelInput from "./LabelInput";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            onLogin({ email, password });
        }}>
            <LabelInput etiqueta="Email" id="email" tipo="email" valor={email} onCambio={setEmail} />
            <LabelInput etiqueta="Contraseña" id="password" tipo="password" valor={password} onCambio={setPassword} />
            <LabelInput tipo="submit" valor="Login" />
        </form>
    );
}
