console.log('hello');

const submitButton = document.querySelector('.search-btn');


submitButton.addEventListener('click', apiRequest);

async function apiRequest() {
  console.log('hello');
  const characterName = document.querySelector('.textBox').value;
  try {
    const response = await fetch(`https://api-project-1-test2.vercel.app/api/${characterName}`);
    const data = await response.json();
    console.log(data);
    document.querySelector('.name').innerText = data.name;
  } catch (err) {
    console.error(err);
  }
}