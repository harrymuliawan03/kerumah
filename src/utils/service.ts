function formatMessages(messages: string[]): string {
  return messages.map((message, index) => {
    // If it's not the last message, add '\n'
    if (index !== messages.length - 1) {
      return message + '\n';
    }
    return message;
  }).join('');
}

export default formatMessages;