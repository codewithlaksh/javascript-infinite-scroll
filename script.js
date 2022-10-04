let postsDiv = document.getElementById('postsDiv');
let limit = 10;
let pageNum = 1;
let postCount = 1;

const getPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&page=${pageNum}`);
    const data = await res.json();
    let posts = data.map((post) => {
        return `<div class="post">
            <span class="serialNum">${postCount++}.</span>
            <span class="details">
                ${post.body}
            </span>
        </div>`;
    })
    postsDiv.insertAdjacentHTML('beforeend', posts);
}
getPosts();

const getMore = () => {
    pageNum++;
    getPosts();
}

window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        getMore();
    }
})