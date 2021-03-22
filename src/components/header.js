const Header = (title, date, temp) => {

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div').classList="header"
  const  dateSpan= document.createElement('span').classList="date"
  const titleH1=document.createElement('h1').classList="title"
  const tempSpan=document.createElement('span').classList="temp"

  dateSpan.textContent=date
  titleH1.textContent=title
  tempSpan.textContent=temp

  headerDiv.appendChild(dateSpan, titleH1, tempSpan)

  return Header

}

  const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selectSelector=document.querySelector('selector')
  selectSelector.appendChild(Header('March Madness','March 21,2021','48°'))
}

export { Header, headerAppender }
