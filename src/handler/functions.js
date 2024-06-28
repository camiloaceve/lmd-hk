// function1.js
const cron = require('node-cron');

function runFunction1() {
  // Lógica de la función 1
  console.log('Function 1 executed!');
}

// Configura el Cron para que se ejecute cada 1 minuto
cron.schedule('* * * * *', runFunction1);