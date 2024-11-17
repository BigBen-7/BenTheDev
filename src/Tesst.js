async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("There was an error fetching your result", error);
  }
}
getPosts();

// step 1: wait until the fetch is complete
// step 2: wait until the response is converted to JSON
// step 3: Do something with the data: like showing it in the console
// NOTE that if you do no parse your response into a json format, what you are going to receIve as a response would be a RAW RESPONSE OBJECT, thta contains the URL, body,headers,statusText and status.
