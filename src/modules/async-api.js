import { display } from './dom.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
let id;
export const createGame = async () => {
  const res = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({ name: 'tufahels game' }),
    headers: { 'Content-type': 'application/json' },
  }).then((res) => res.json())
    .then((json) => {
      id = json;
    });
};

export const addUpdate = async (name, score) => {
  const res = await fetch(`${url}/${id}/scores`, {
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
  const update = await fetch(`${url}/${id}/scores/`)
    .then((update) => update.json());
  display(update.result);
};