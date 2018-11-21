const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "510883625131311109"; // ايدي السيرفر
var channel = "510883625131311113";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Verse Spam , Verse Spam , Verse Spam , Verse Spam , Verse Spam , Verse Spam , Verse Spam ,  , Verse Spam , Verse Spam , Verse Spam , Verse Spam , Verse Spam , Verse Spam , Verse Spam , **')  },400);
})

client.on('message', message => {
    let prefix = 'v1';
   if(message.content.startsWith('v1say')) {
       let args = message.content.split(' ').slice(1).join(' ');
       message.channel.send(args)
   } 
});

client.login( توكن البوت );
