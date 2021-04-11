import { ApplicationCommandData, CommandInteraction } from 'discord.js-light';

import { EventData } from '../models/internal-models';
import { Lang } from '../services';
import { MessageUtils } from '../utils';
import { Command } from './command';

export class HelpCommand implements Command {
    public info: ApplicationCommandData = {
        name: Lang.getRef('commands.help', Lang.Default),
        description: 'Show help menu.',
    };
    public requireGuild = false;
    public requirePerms = [];

    public async execute(intr: CommandInteraction, data: EventData): Promise<void> {
        await MessageUtils.replyIntr(intr, Lang.getEmbed('displays.help', data.lang()));
    }
}
