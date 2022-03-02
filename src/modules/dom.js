const nameScores = document.querySelector('.name-lists');

export const display = (data) => {
  nameScores.replaceChildren();
  data.map((i) => {
    const nameScoreDiv = document.createElement('div');
    nameScoreDiv.id = 'nameScoreDiv';

    const userName = document.createElement('p');
    userName.class = 'name';
    userName.textContent = `${i.user} :`;

    const userScore = document.createElement('p');
    userScore.class = 'score';
    userScore.textContent = i.score;

    nameScoreDiv.appendChild(userName);
    nameScoreDiv.appendChild(userScore);
    nameScores.appendChild(nameScoreDiv);

    return i;
  });
};