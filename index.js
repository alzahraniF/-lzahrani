///////////////////////////// Npm
const Discord = require('discord.js');
const client = new Discord.Client();
const check = new Discord.Client();
const figlet = require('figlet')
const fs = require('fs')
////////////////////////////// Variables
const perfix = "&";
////////////////////////////////// Codes
client.on('message', message => {
  message.reply(`> test trumx`);
})
///////////////////////////////// System
client.on('ready', () => {
    console.clear();
  figlet.text('àlzahrani', { 
  font: 'Big',
  horizontalLayout: 'default', 
  verticalLayout: 'default',
  width: 80, 
  whitespaceBreak: true 
  },
function(err, data) {
if (err) { 
console.log('Something went wrong...'); 
console.dir(err); 
return; 
}
  
  console.log('\x1b[32m', `${data}`);
console.log('\x1b[32m', `╭────────────────── • ◈ • ──────────────────╮`)
console.log(`- ${client.user.tag} iS OnLiNe`)
//////// files

//
setTimeout( () => {
  console.log(`╰────────────────── • ◈ • ──────────────────╯`)
}, 5000)
})
})
client.login("OTI4MzE1NTA2OTYyODU4MDI0.YdW_MA.ldJYOd2e0aP-ch7xjRz8yyvyY44")