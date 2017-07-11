const WRITE_CHANNEL = 'WRITE_CHANNEL';


export function writeChannel(content) {
  const action = { type: WRITE_CHANNEL, content };
  return action;
}

export default function writeChannelreducer (state = '', action) {
  switch (action.type) {
    case WRITE_CHANNEL:
      return action.content
    default:
      return state;
  }
}