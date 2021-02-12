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
  console.log("Asistente del Centro LEO en servicio");
  presence();
});

client.on("message", (msg) => {

  if(msg.member.roles.cache.some(r=>["Estudiante"].includes(r.name))){

    if (msg.content.includes("llegado")) {
      msg.reply("si te refieres a por qué no te ha llegado tu texto retroalimentado, recuerda que te llegará a tu correo en horas de la tarde. A veces tenemos mucho trabajo y tardamos un poquito más :(").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); //Used for error handling
      
    }

    /*else if (!msg.content === "") {
      msg.reply("").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); //Used for error handling
      
    }*/
 
    else if (msg.content.includes("subir")) {
      msg.reply("si te refieres a cómo subir un texto o recurso de oralidad, en el canal #📤subir-archivo encontrarás un link a un formulario de Google para hacerlo. Los horarios para que puedas subirlo son de 8:30 - 11:30 a.m. Si no aparece el canal en esos horarios significa que ya alcanzamos el tope diario que podemos revisar. Te agradecemos visitarnos mañana.").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); //Used for error handling
    
    }

    else if (msg.content.includes("para entrar") || msg.content.includes("deja entrar") ||  msg.content.includes("puedo entrar") || msg.content.includes("como entrar") || msg.content.includes("entrar al") || msg.content.includes("entrar a") || msg.content.includes("meterme") || msg.content.includes("link") && !(msg.content.includes("Moodle") || msg.content.includes("moodle"))) {
      msg.reply("si el link al canal que te dio el monitor no funciona, puedes entrar directamente al canal de voz de tu monitor asignado. Dicho canal lo encuentras en la parte izquierda, busca su nombre y da click en él. Si sigues teniendo problemas espera que un monitor te asista.").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); //Used for error handling
     
    }

    else if ((msg.content.includes("gustaria una cita") || msg.content.includes("dar una cita") || msg.content.includes("pedir una cita") || msg.content.includes("pedir cita") || msg.content.includes("solicitar cita") || msg.content.includes("solicitar una cita") || msg.content.includes("agendar una cita") || msg.content.includes("agendar cita") || msg.content.includes("solicitar una monitoria") || msg.content.includes("solicitar una monitora") || msg.content.includes("solicitar una monitoría") || msg.content.includes("agendar una monitoria") || msg.content.includes("agendar una monitoría") || msg.content.includes("sacar una cita"))) {
      msg.reply("Para solicitar una monitoria, déjanos los siguientes datos: \n**1. **Nombre y apellido. \n**2.** Código estudiantil. \n**3. **Número de WhatsApp (opcional, por si debemos comunicarnos contigo). \n**4. **Curso/materia. \n**5. **Disponibilidad horaria (días y horas) que te puedan servir. (Recuerda conocer los #⏰horarios de los monitores). .\n**6. **Descripción breve de la necesidad (ayuda en un ensayo, presentación oral). .\n**7. **Monitor que prefieres (opcional). \nEn los horarios de atención un monitor leerá tu mensaje y te confirmará si quedaste agendado. **Recuerda que debes haber sido confirmado por parte del monitor que te agende.** Este mensaje se autodestruirá en 2 minutos...").then(ms => {
        ms.delete({timeout: 120000})
      })
      .catch(); //Used for error handling
     
    }
    else {

    }
    

   /*msg.reply("Hemos terminado nuestro tiempo de acompañamiento. Agradecemos tu visita. Nos vemos el otro semestre. Recuerda que el Centro LEO te acompaña.").then(ms => {
    ms.delete({timeout: 120000})
  })
  .catch();*/
  }

});

client.login(process.env.token);
