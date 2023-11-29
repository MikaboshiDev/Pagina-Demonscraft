axios({
    method: "get",
    url: "https://discord.com/api/v10/guilds/<server ID>/members",
    headers: {
        Authorization: `Bot`,
        'Content-Type': 'application/json',
    }
})
    .then(response => {
        const userCount = response.data.length; // Número de usuarios conectados
        const userSection = document.getElementById('discord-users');
        const webSection = document.getElementById("webUsers")
        userSection.innerHTML = `<span class="material-icons-sharp">discord</span> Usuarios conectados: ${userCount}`;
        webSection.innerHTML = `<span class="material-icons-sharp">web</span> Usuarios conectados: ${userCount}`;
    })
    .catch(error => {
        console.error('Error al obtener información de Discord:', error);
    });