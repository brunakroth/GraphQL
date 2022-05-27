import React from 'react';

export default function Signin() {
    return (

        <form action="/authenticate" method="post">
            <fieldset>
                <label for="email">E-mail:</label>
                <input id="email" type="email" inputmode="email" name="email" autocomplete="username" />
            </fieldset>
            <fieldset>
                <label for="password">Senha: </label>
                <input id="password" type="password" name="password" autocomplete="current-password" />
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    );
}