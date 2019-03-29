document.addEventListener('DOMContentLoaded', function() {

  const button = document.querySelector('.summon-cats');
  const catBoxes = document.querySelectorAll('.cat-box');

  button.addEventListener('click', () => {
    console.log('Button was clicked!');
    axios.get('http://bitkittens.herokuapp.com/cats.json')
    .then((response) => {
      // console.log(response.data)

    catBoxes.forEach((box, i) => {
      box.innerHTML = '';
      const image = document.createElement('img');
      image.src = response.data.cats[i].photo;
      image.alt = `Photo of ${response.data.cats[i].name}`;
      box.appendChild(image);
    });
  });
  });

});
