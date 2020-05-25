export function formatQuestion(question, user) {
  const { optionOne, optionTwo, author, id } = question;
  const { name, avatarURL } = user;
  return {
    id: id,
    name,
    avatar: avatarURL,
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: optionOne.votes,
      text: optionOne.text,
    },
    optionTwo: {
      votes: optionTwo.votes,
      text: optionTwo.text,
    },
  };
}
