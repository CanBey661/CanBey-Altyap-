const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  if (!message.guild) {
  const mesajsilindi = new Discord.RichEmbed()
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(':fire: Üzgünüm, bunu yapamazsınız!')
  return message.author.sendEmbed(ozelmesajuyari); }    
  if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      const mesajsilindi = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setColor(0x808080)
      .setTimestamp()
      .addField('Kullanıcı adı;', message.author.username + '#' + message.author.discriminator)
      .addField('ID;', message.author.id)
      .addField('Kayıt tarihi;', message.author.createdAt)
      .addField('Durum;', durm)
      .addField('Şu an oynadığı oyun;', message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamamakta!')
      .setFooter('Yıkık, iyi eğlenceler diler!', client.user.avatarURL)
      console.log("Y!kullanıcı-bilgi komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(mesajsilindi).then(msg => msg.delete(500000));
      return message.channel.sendEmbed(kullanicibilgimk)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı', 'kullanıcı bilgim', 'kbilgim'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'Komutu kullanan kişi hakkında bilgi verir!',
  usage: 'kullanıcı-bilgi'
};