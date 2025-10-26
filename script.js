const feed = document.getElementById('feed');

// --- Add posts here ---
const posts = [
    { img: 'images/image-2.jpg', caption: "Gordon Parks 'Crime, 1957' photo essay embeding with the Chicago Police for Life Magazine.", date: 'Oct 26, 2025' },
    { img: 'images/image-1.jpg', caption: 'EditDroid - 1980s editing system created by George Lucas.', date: 'Oct 25, 2025' },

  // Add more posts as needed
];

// --- Function to render posts ---
function renderPosts(postArray) {
  postArray.forEach(post => {
    const div = document.createElement('div');
    div.className = 'post';

    const img = document.createElement('img');
    img.src = post.img;
    img.alt = post.caption;
    img.loading = 'lazy';

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = post.caption;

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = post.date;

    div.appendChild(img);
    div.appendChild(caption);
    div.appendChild(date);

    feed.appendChild(div);
  });

  // Trigger fade-in animation
  revealPostsOnScroll();
}

// --- Fade-in on scroll ---
function revealPostsOnScroll() {
  const posts = document.querySelectorAll('.post');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    posts.forEach(post => {
      const postTop = post.getBoundingClientRect().top;
      if (postTop < triggerBottom) {
        post.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
}

// --- Render all posts on page load ---
renderPosts(posts);
