# discord.js-starting
Proyecto para iniciar en discord.js; creado y probado en tiempo real con un bot real.

## Necesario:
- Secret llamado `BOT_TOKEN` que almacéne el token de tu bot.

## NPM packages usados:
- handle-bot `0.1.4-alpha`
- fs `0.0.1-security`
- express `4.17.3`
- discord.js `16.6.0`

## prefix?
El prefix por defecto es `ds!` puedes cambiarlo en la variable llamada `prefix` en la siguiente ruta: `eventos/Message/create.js`.

## Fork directo:
[fork en replit](https://replit.com/github/k1-1960/discord.js-starting)

<h1><img src="https://emoji.gg/assets/emoji/6773_Alert.png" width="34" align="top"> Importante</h1>

- No crees archivos en la carpeta eventos o en la de comandos, para añadir comandos o eventos crea una subcarpeta, esto para ordenarlo.
ejemplo:

```js
┏ bot/
┣━ index.js
┣━ comandos/
┃   ┃
┃   ┣━ Normal/
┃   ┃  ┣━ ping.js
┃   ┃  ┣━ avatar.js
┃   ┃  ┗ etc...
┃   ┃
┃   ┗━ Moderacion/
┃       ┣━ kick.js
┃       ┣━ ban.js
┃       ┗━ etc...
┃
┣━ eventos/
┃  ┃
┃  ┣━ Client/
┃  ┃  ┣━ ready.js
┃  ┃  ┗━ etc...
┃  ┃
┃  ┗ Message/
┃    ┣ create.js
┃    ┗ etc...
┃
┗━━━━━━━━━━━━━━━━━━━━━

```

- debes activar los intents en la [pagina de desarrolladores de Discord](https://www.discord.com/developers/applications)
- **NO** proporciones el token de tu bot ni el proyecto a cualquier persona, solo a tu equipo de trabajo.

<br>
<br>

<a href="https://github.com/k1-1960/discord.js-starting/blob/main/CHANGELOG.md">`Changelog`</a>
