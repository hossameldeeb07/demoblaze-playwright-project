export function generateRandomUser() {
  const randomSuffix = Math.floor(Math.random() * 100000);
  const username = `user${randomSuffix}`;
  const password = `pass${randomSuffix}`;
  return { username, password };
}
