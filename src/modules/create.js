const posts = [
  { name: 'Name', score: '180' },
  { name: 'Name', score: '280' },
  { name: 'Name', score: '380' },
  { name: 'Name', score: '80' },
  { name: 'Name', score: '480' },
];

const nameLists = document.querySelector('.name-lists');

export const getPosts = () => {
  let output = '';
  posts.forEach((post) => {
    output += `<p class="name-list">${post.name}: ${post.score}</p>`;
  });
  nameLists.innerHTML = output;
};

export const createPost = (callback) => callback();
