import { CmdParams, Documentation } from '../types';
import { CustomEmbed } from '../common/embed';

async function about(params: CmdParams) {
  params.msg.channel.send(
    new CustomEmbed({
      title: 'About',
      description: '',
      fields: [
        {
          name: 'Authors',
          value: `Bot written by wiisportsresorts#9388 and qqq#0447`,
        },
        {
          name: 'Source code',
          value:
            'This bot is open source; it is written in Typescript and utilizes the Discord.js library.\n' + 
            'See the source code, report bugs, and suggest features or changes at ' + 
            'https://github.com/wiisportsresort/minecraft-bot',
          inline: false,
        },
      ],
    }),
  );
}

namespace about {
  export const docs: Documentation = {
    usage: 'about',
    description: 'Show bot info',
    detailed: 'Shows information about authors, source code, and other useful stuff.',
  };
}
export = about;
