const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
  client.user.setPresence({
    status: "online",
    game: {
      name: "Solo soy un bot, no esperes mucho de mí :(",
      type: "Holas bolas"
    }
  });
}

client.on("ready", () => {
  console.log("¡Asistente del Centro LEO en servicio!");
  presence();
});

client.on("message", (msg) => {

  if(msg.member.roles.cache.some(r=>["Admin"].includes(r.name))){

    if (msg.content.includes("llegado")) {
      msg.reply("si te refieres a por qué no te ha llegado tu texto retroalimentado, recuerda que te llegará a tu correo en horas de la tarde. A veces tenemos mucho trabajo y tardamos un poquito más :(").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); /*Used for error handling*/
      
    }
  
    else if (msg.content.includes("subir")) {
      msg.reply("si te refieres a cómo subir un texto en Moodle hay un enlace o tarea donde puedes subir tu texto/video para retroalimentación. Los horarios para que puedas subirlo son de 8:30 - 11:30 a.m. Si no aparece el enlace en esos horarios significa que ya alcanzamos el tope diario que podemos revisar.").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); /*Used for error handling*/
      
    }

    else if (msg.content.includes("link") && !(msg.content.includes("Moodle") || msg.content.includes("moodle"))) {
      msg.reply("si el link al canal que te dio el monitor no funciona, puedes entrar directamente al canal de voz de tu monitor asignado. Dicho canal lo encuentras en la parte izquierda, busca su nombre y da click en él. Si sigues teniendo problemas espera que un monitor te asista.").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); /*Used for error handling*/
     
    }

    else if (msg.content.includes("solicitar cita") || msg.content.includes("solicitar una cita") || msg.content.includes("agendar una cita")) {
      msg.reply("Para agilizar el agendamiento de citas recuerda escribir: \n**1. **Su nombre y apellido (por si no es claro en tu nickname). \n**2.** Uno o varios horarios que les puedan servir (los horarios están en #horarios). \n**3. **El motivo de la cita (revisar un ensayo, ayuda en oralidad, etc.). \n**4. **Si quieren con un monitor en especifico (esta es opcional).\n**5. **La materia. \nEste mensaje se autodestruirá en 1 minuto...").then(ms => {
        ms.delete({timeout: 60000})
      })
      .catch(); /*Used for error handling*/
     
    }
    else {

    }

    
  }

});

client.login(process.env.token);
