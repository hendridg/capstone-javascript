// function to post element
const postNewMessage = async (id, name, text) => {
  const postMessageLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';
  const request = new Request(postMessageLink);
  const data = {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      "item_id": id,
      "username": name,
      "comment": text 
    }),
  }
  
  const response = await fetch(request, data);
  const responseJson = await response.json();

  console.log(responseJson);
};

const newMessageForm = (container) => {
  const formNewMessage = document.createElement('div');
  formNewMessage.innerHTML = `<h3>Add a Comment</h3>
  <form action="/action_page.php">
    <input type="text" name="username" id="username" placeholder="Your name">
    <textarea id="comment" name="comment" rows="4" cols="30" placeholder="Your comment"></textarea>
    <input type="button" value="Comment" id="button">
  </form>`;
  formNewMessage.classList.add('mesgContent');
  const userName = document.getElementById('username');
  const textMessage = document.getElementById('comment');
  const button = document.getElementById('button');
  container.appendChild(formNewMessage);
}

export {newMessageForm as default};