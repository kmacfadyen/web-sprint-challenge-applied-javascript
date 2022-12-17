import axios from "axios";


const Tabs = (topics) => {

  let topics1 = document.createElement('div');
  topics1.classList.add('topics');

  let list = topics.map(topic => {
    let div = document.createElement('div');
    div.textContent = topic;
  topics1.appendChild(div);
    return div;
  })

return topics1;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

// console.log(Tabs(["A", "B"]));

const tabsAppender = (selector) => {

  
  axios.get(`http://localhost:5001/api/topics`)
  .then(res => {
    const tabs1 = Tabs(res.data.topics);
    const tabs2 = document.querySelector(selector);
  tabs2.appendChild(tabs1);
  // console.log(res);
  return tabs2;
  })
  .catch(err => {
    console.log(err);
  })

 

  // return tabs2;

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
