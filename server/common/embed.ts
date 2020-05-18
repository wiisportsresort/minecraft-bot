import { MessageEmbed, MessageEmbedOptions, EmbedField, EmbedFieldData } from 'discord.js';

type StringLike = string | number | boolean;

export class CustomEmbed extends MessageEmbed {
  constructor(data?: MessageEmbedOptions) {
    super(data);

    this.setAuthor('Acolyte Bot').setColor(0x7ac7f1).setFooter('footer');
  }

  /** Add fields in the format `[name, value, inline?]`. */
  addCustomFields(...fields: Array<[StringLike, StringLike, boolean?]>) {
    const array: Array<EmbedFieldData> = [];

    for (const field of fields)
      array.push({
        name: field[0].toString(),
        value: field[1].toString(),
        inline: field[2] || true,
      });

    this.addFields(array);

    return this;
  }
}
