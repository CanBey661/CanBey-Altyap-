const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [ 
              '**Eğlence komutları ** \n \n  ?atatürk = dene ve gör  \n ?nahçek = nah çekersiniz \n ?fakemesaj = etiketlediğniz kişinin adına fake mesaj atar \n ?bayrak = bayrağımızı gösterir \n ?balıktut = Balık Tutarsın. \n ?boks-makinesi = Boks makinesine vurur. \n ?emojiyazı = Mesajınızı emoji haline getirir \n ?hesapla = Belirtilen işlemi yapar \n ?kaçcm = Malafatını Söyler \n ?stresçarkı = Sizin için bir stres çarkı çevirir. \n \n ?stresçarkı = sizin için bir stres çarkı çevirir.  ',
              '**Kullanıcı özel komutlar ** \n \n ?afk = Kullanıcııyı afk moduna sokar. \n ?avatar = Avatarınızı gösterir \n ?banner = istediğiniz yazıyı resimli şekilde atar d\n ?level = levelinizi gösterir \n ?servericon = sunucu resmini gösterir ',
              '** Yetkili komutları** \n \n ?oylama = Oylama yapmanızı sağlar \n ?sunucu-kur = sunucuda odaları ve sohbet kanlarını açar \n ?panelkur = sunucu paneli kurar \n ?sustur = etiketlediğiniz kişiyi susturur isterseniz süreli mutede atabilrisiniz <1sn/1dk/1sa/1g> \n ?sil = istediğiniz miktarda mesaj siler \n ?unban = etiketlediğin kişinin banının açar ',
              '**Bot ile ilgili** \n ?davet = botun davetini gösterir.',
            ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};