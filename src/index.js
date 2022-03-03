import './style.css';
import _, { forEach } from 'lodash';
import { getUpdate, createGame, addUpdate } from './modules/async-api.js';
import { display } from './modules/dom.js';

const userName = document.querySelector('#name');
const userScore = document.querySelector('#score');
const form = document.querySelector('#form');
const refreshBtn = document.querySelector('.btn-refresh');
const fullLoad = document.querySelector('.full-load');
const formLoad = document.querySelector('.form-load');

createGame();

form.addEventListener('submit', () => {
  formLoad.style.display = 'block';
  if (userName.value && userScore.value) {
    formLoad.innerHTML = 'Success! Click Refresh Button for update.';
  }
  addUpdate();
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  formLoad.style.display = 'none';
  getUpdate();
});

window.onload = () => {
  fullLoad.innerHTML = 'Please wait, content loading....';
  getUpdate();
};