 const changeColorBtn = document.getElementById('changeColorBtn');

function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 100);
    const g = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    return `rgb(${r}, ${g}, ${b})`;
}

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomDarkColor();
});
 
document.getElementById('fetchPostsBtn').addEventListener('click', fetchPosts);

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('postsContainer');
            postsContainer.innerHTML = '';

            const firstFive = data.slice(0, 5);

            firstFive.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.style.border = '1px solid #39FF14';
                postDiv.style.padding = '10px';
                postDiv.style.marginBottom = '10px';
                postDiv.style.borderRadius = '5px';
                postDiv.innerHTML = `
                    <h3 style="color: #aaffaa;">${post.title}</h3>
                    <p style="color: #88ff88;">${post.body}</p>
                `;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}
