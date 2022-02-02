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
  const responsInfo = responseJson.meals[0];

  const messageData = await getComments(id);

  createPopup(responsInfo, messageData);
};
