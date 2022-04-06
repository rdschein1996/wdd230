const requestFile = 'json/temples.json';

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const temples = jsonObject['temples'];

    temples.forEach(displayTemples);
    
    console.log(temples.length);
  });



function displayTemples(temples) {
  
  let i = 1;
  let card = document.createElement('section');
  let like = document.createElement('button');
  like.id = "like"+i;
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let services = document.createElement('p');
  let history = document.createElement('p');
  let ordinance = document.createElement('p');
  let session = document.createElement('p');
  let closure = document.createElement('p');
  let image = document.createElement('img');

  


  like.innerHTML = "🤍";
  like.onclick = function () {
    like.innerHTML = "💙";
  }
  
  h2.textContent = `${temples.name}`;
  address.textContent = `Address: ${temples.address}`;
  phone.textContent = `Phone: ${temples.phone}`;
  email.textContent = `Email: ${temples.email}`;
  services.textContent = `Services: ${temples.services}`;
  history.textContent = `History: ${temples.history}`;
  ordinance.textContent = `Ordinance Schedule Info: ${temples.ordinance_schedule}`;
  session.textContent = `Session Schedule Info: ${temples.session_schedule}`;
  closure.textContent = `Closure Schedule Info: ${temples.closure_schedule}`;
  image.setAttribute('src', temples.imageurl);

  card.appendChild(like);
  card.appendChild(h2);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(services);
  card.appendChild(history);
  card.appendChild(ordinance);
  card.appendChild(session);
  card.appendChild(closure);
  card.appendChild(image);

  document.querySelector('.cards').appendChild(card);
  i++;

}