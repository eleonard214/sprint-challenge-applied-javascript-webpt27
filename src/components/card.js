import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div').classList="card"
  const  headlineDiv= document.createElement('div').classList="headline"
  const authorDiv=document.createElement('div').classList="author"
  const imgDiv=document.createElement('div').classList="img-container"
  const authorImg=document.createElement('img')
  const authorSpan=document.createElement('span')

headlineDiv.textContent=`${article.headline}`
authorImg.setAttribute('src', article.authorPhoto)
authorSpan.textContent=`By ${article.authorName}`

  imgDiv.appendChild(authorImg)
  authorDiv.appendChild(imgDiv, authorSpan)
  cardDiv.appendChild(headlineDiv, authorDiv)

  cardDiv.addEventListener('click', console.log(`${article.headline}`))

  return Card
  

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get("https://lambda-times-api.herokuapp.com/articles")
  .then(result=>{
    console.log(res.data.articles)
  })

  const javascript = result.data.articles.javascript
  const bootstrap = result.data.articles.bootstrap
  const technology = result.data.articles.technology
  const jquery = result.data.articles.jquery
  const node = result.data.articles.node

javascript.forEach((article)=>{
  document.querySelector(selector).appendChild(Card(article))
})
bootstrap.forEach((article)=>{
  document.querySelector(selector).appendChild(Card(article))
})

technology.forEach((article) => {
  document.querySelector(selector).appendChild(Card(article))
})

jquery.forEach((article) => {
  document.querySelector(selector).appendChild(Card(article))
})

node.forEach((article) => {
  document.querySelector(selector).appendChild(Card(article))
})

.catch(error=>{
  console.log("WRONG!!!!")
})
}

export { Card, cardAppender }
