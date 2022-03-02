import { display } from './dom.js';

export const createGame = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({ name: 'tufahels game' }),
    headers: { 'Content-type': 'application/json' },
  });
  return res.json();
};

export const addUpdate = async (name, score) => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tf/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: { 'Content-type': 'application/json' },
  });
  return res.json();
};

export const getUpdate = async () => {
  let update = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tf/scores/');
  update = await update.json();
  display(update.result);
};