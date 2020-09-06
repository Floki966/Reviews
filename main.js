//local data
const reviews = [
  {
    name: 'John Doe',
    age: 44,
    job: 'Head of marketing',
    img: 'CEO.jpg',
    text:
      'Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    name: 'Silvia Guterrez',
    age: 17,
    job: 'Trainee',
    img: 'Silvia.jpg',
    text:
      'Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. Youll see the number of Apart from counting words and characters, our online editor can help Apart from counting words and characters, our online editor can help',
  },
  {
    name: 'Walter White',
    age: 33,
    img: 'Walter.jpg',
    job: 'Head of research & development',
    text:
      'Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays.',
  },
];

//grap important id´s an classes
const img = document.querySelector('#img-review');
const name = document.getElementById('Name');
const job = document.querySelector('#Job');
const text = document.querySelector('#Text');
const left = document.querySelector('.fa-chevron-left');
const right = document.querySelector('.fa-chevron-right');
let counter = 0;

//skip throw data
right.addEventListener('click', function () {
  if (counter < reviews.length - 1) {
    counter++;
    changeContent();
    console.log(counter);
    left.style.visibility = 'visible';
  }
  if (counter == 2) {
    right.style.visibility = 'hidden';
  }
});

left.addEventListener('click', function () {
  if (counter > 0) {
    counter--;
    changeContent();
    console.log(counter);
  }
  if (counter == 0) {
    left.style.visibility = 'hidden';
    right.style.visibility = 'visible';
  }
});

// helper functions
function changeContent() {
  name.textContent = reviews[counter].name;
  job.textContent = reviews[counter].job;
  text.textContent = reviews[counter].text;
  img.src = reviews[counter].img;
}
