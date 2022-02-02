const displayComents = () => {
  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id=52874'; // you need to add item id at end of url

}

// function to get all messages
const getComments = async (elem) => {
  const id = elem.idMeal;
  const getMessagesLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cq8n4ydnTGepOHztUKmY/comments?item_id=';
  const request = new Request(getMessagesLink + id);
  const response = await fetch(request);
  const responseJson = await response.json();

  console.log(responseJson);
};