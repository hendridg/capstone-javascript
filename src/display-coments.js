const displayComents = (arr, container) => {
  const title = document.createElement('h3');
  title.innerHTML = 'Comments:';
  container.appendChild(title);
  const messageData = document.createElement('div');
  if (!arr.error) {
    arr.forEach((element) => {
      const messItem = document.createElement('div');
      messItem.innerHTML = `
      <span>${element.creation_date} - <strong>${element.username}:</strong> ${element.comment}</span><hr width="250px">`;
      messageData.appendChild(messItem);
    });
  } else {
    messageData.innerHTML = '<span>Any Comments Yet</span><hr width="250px">';
  }
  container.appendChild(messageData);
};

// function to get all messages
const getComments = async (id) => {
  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id=';
  const request = new Request(getMessagesLink + id);
  const response = await fetch(request);
  const responseJson = await response.json();

  return responseJson;
};

export { displayComents, getComments };