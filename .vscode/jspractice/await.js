// async function getCall(){

//     //fetching -> async -> await
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // console.log(response);
//     //JSON parse
//     let data = await response.json();
//     console.log(data);
// }
// getCall();

const url = 'https://dummyjson.com/posts/add';
const options =  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'twinkle kumari -> I am in love with someone.',
      userId: 5
    })};

async function postCall(){
    const response = await fetch(url,options);

    let data = await response.json();
    console.log(data);
}    
async function getCall(){
    const response = await fetch('https://dummyjson.com/posts');
    let data = await response.json();
    console.log(data);
}
async function processData(){
    await postCall();
    await getCall();
    
}
processData();