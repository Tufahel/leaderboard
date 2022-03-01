const posts = [
  { name: 100 },
  { name: 200 },
  { name: 300 },
  { name: 70 },
  { name: 50 },
];

const nameLists = document.querySelector('.name-lists');

export const getPosts = () => {
  let output = '';
  posts.forEach((post) => {
    output += `<p class="name-list">Name: ${post.name}</p>`;
  });
  nameLists.innerHTML = output;
};

export const createPost = (callback) => callback();
