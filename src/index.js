import './style.css';
import _ from 'lodash';
import { getUpdate, createGame, addUpdate } from './modules/async-api.js';
import { display } from './modules/dom.js';

const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');
const form = document.querySelector('#form');
const refreshBtn = document.querySelector('.btn-refresh');

createGame();
form.addEventListener('submit', () => {
  addUpdate(userName.value, userScore.value);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  getUpdate();
});

window.onload = () => {
  getUpdate();
};