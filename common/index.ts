

export function generateRandomToken(length = 16) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
}

