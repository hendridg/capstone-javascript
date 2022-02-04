import { displayComents, getComments } from './displayComents.js';

// function to post element
const postNewMessage = async (id, name, text) => {
  const postMessageLink =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments';
  const request = new Request(postMessageLink);
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  };

  await fetch(request, data);
  const arr = await getComments(id);
  const container = document.getElementById('mesgContainer');
  displayComents(arr, container);
};

const newMessage = (id, user, message) => {
  if (user.value !== '' && message.value !== '') {
    postNewMessage(id, user.value, message.value);
    user.value = '';
    message.value = '';
  }
};

const newMessageForm = (container, itemId) => {
  const formNewMessage = document.createElement('div');
  formNewMessage.innerHTML = '<h3 class="aligCener">Add a Comment</h3>';
  formNewMessage.classList.add('mesgContent');
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.name = 'username';
  userName.placeholder = 'Your name';
  const textMessage = document.createElement('textarea');
  textMessage.name = 'comment';
  textMessage.rows = '4';
  textMessage.cols = '30';
  textMessage.placeholder = 'Your comment';
  const button = document.createElement('input');
  button.type = 'button';
  button.value = 'Comment';
  button.addEventListener('click', () =>
    newMessage(itemId, userName, textMessage)
  );
  formNewMessage.appendChild(userName);
  formNewMessage.appendChild(textMessage);
  formNewMessage.appendChild(button);

  container.appendChild(formNewMessage);
};

export { newMessageForm as default };
