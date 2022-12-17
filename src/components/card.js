import axios from "axios";

const Card = (article) => {

  const card1 = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const img = document.createElement('div');
  const authorName = document.createElement('span');

  card1.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  img.classList.add('img-container');

  card1.appendChild(headline);
  card1.appendChild(author);
  author.appendChild(img);
  img.appendChild(authorPhoto);
  author.appendChild(authorName);

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card1.addEventListener('click', () => {
    console.log(headline);
  })

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
  return card1;
}

console.log(Card({ headline: "headline", authorPhoto: "authorPhoto", authorName: "authorName"}));

const cardAppender = (selector) => {

  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {

    // const card2 = document.querySelector(selector);

    const articles1 = res.data.articles;
    for(let key in articles1) {
      articles1[key].forEach(elem => {
        let A1 = Card(elem);
        let card2 = document.querySelector(selector);
        card2.appendChild(A1);
      });
    }

    // for(let i = 0; i < res.data.articles.length; i++) {

    // const cardA1 = Card(res.data.articles);
    // const cardB1 = Card(res.data.articles.bootstrap[0]);
    // const cardC1 = Card(res.data.articles.bootstrap[1]);
    // const cardD1 = Card(res.data.articles.bootstrap[2]);
    // const cardE1 = Card(res.data.articles.bootstrap[3]);
    // const card12 = Card(res.data.articles.technology[0], res.data.articles.technology[1], res.data.articles.technology[2], res.data.articles.technology[3] );
    // const card13 = Card(res.data.articles.jquery[0], res.data.articles.jquery[1], res.data.articles.jquery[2], res.data.articles.jquery[3] );
    // const card14 = Card(res.data.articles.node[0], res.data.articles.node[1], res.data.articles.node[2], res.data.articles.node[3] );
    // const card15 = Card(res.data.articles.prototype);

    // card2.appendChild(card1[i]);
    // return card2;
    // }

  // card2.appendChild(cardB1);
  // card2.appendChild(cardB2);
  // card2.appendChild(cardB3);
  // card2.appendChild(cardB4);
  // card2.appendChild(card15);


  console.log(res.data.articles);
  console.log(card2);
  
  // return card2;
  })
  .catch(err => {
    console.log(err);
  })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // return card2;
}

export { Card, cardAppender }
