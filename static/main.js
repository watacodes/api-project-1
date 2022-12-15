
const submitButton = document.querySelector('.search-btn');


submitButton.addEventListener('click', apiRequest);

async function apiRequest() {
  const characterName = document.querySelector('.textBox').value;
  try {
    const response = await fetch(`https://api-project-1-fulo0yke7-watacodes.vercel.app/api/${characterName}`);
    const data = await response.json();
    console.log(data);
    document.querySelector('.age').innerText = data.age;
    document.querySelector('.species').innerText = data.species;
    document.querySelector('.favorite food').innerText = data['favorite food'];
  } catch (err) {
    console.error(err);
  }
}