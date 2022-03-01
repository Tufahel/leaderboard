import './style.css';
import _ from 'lodash';
import { getPosts, createPost } from './modules/create.js';

createPost(getPosts);