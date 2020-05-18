import { CmdParams, Documentation } from "../types";

async function status(params: CmdParams) {
  const { msg } = params;

  return msg.channel.send('status command');
}

namespace status {
  const docs: Documentation = {
    usage: 'status',
    description: 'Create status message',
    detailed: '',
  };
}

export = status;
