const posts = [
  { name: 'One' },
  { name: 'Two' },
  { name: 'Three' },
  { name: 'Four' },
  { name: 'Five' },
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
