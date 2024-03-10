function hey(phrase: string): string {
  let all_uppercase = /^[A-Z \d\W]+$/.test(phrase.trim());
  let question = /\?$/.test(phrase.trim());
  let no_letters = !/[a-zA-Z]/.test(phrase.trim());
  if (all_uppercase && question) {
    return `Calm down, I know what I'm doing!`;
  }
  if (all_uppercase) {
    return `Whoa, chill out!`;
  }
  if (question) {
    return `Sure.`;
  }
  if (no_letters) {
    return `Fine. Be that way!`;
  }

  return `Whatever.`;
}
