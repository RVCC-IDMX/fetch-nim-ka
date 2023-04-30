const postSection = document.querySelector("#posts")
const postTemplate = document.querySelector("#post-template")

getData()

async function getData() {
    const postStream = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await postStream.json()

    for (let i = 0; i < 10; i++) {
        const post = posts[i]

        const title = post.title
        const body = post.body
        
        const res = await fetch("https://img.sm64.us/300/200")
        const blob = await res.blob()

        const newPost = document.importNode(postTemplate.content, true)
        const postTitle = newPost.querySelector(".post__title")
        const postBody = newPost.querySelector(".post__body")
        const postImg = newPost.querySelector(".post__img")

        postTitle.innerText = title
        postBody.innerText = body
        postImg.src = URL.createObjectURL(blob)

        postSection.appendChild(newPost)
    }
}