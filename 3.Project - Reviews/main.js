// local reviews data
// Normally We get this Data using Ajax Request using httpresponse
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    
  ];
  /*
  // select btn-next and prev and surprise
  
  let count = 0;
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  const btn = document.querySelectorAll('button');
  btn.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
          var btn_class = e.currentTarget.classList;
          if(btn_class.contains('prev-btn')) {
              count = (count - 1 + reviews.length) % reviews.length;              
          }
          else if(btn_class.contains('next-btn')) {
              count = (count + 1) % reviews.length;
              
          }
          else {
              count = Math.floor((Math.random() * reviews.length) + 0);
          }

          author.textContent = reviews[count].name;
          job.textContent = reviews[count].job;
          info.textContent = reviews[count].text;
          img.src = reviews[count].img

      })
  })
  */

  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  // Set Starting Item
  let currentItem = 0;
  
  // load initial item

  // the event DOMContentLoaded Event is fired when initial html is loaded completely
  window.addEventListener('DOMContentLoaded', function () {
       
    showPerson();

  })
  
  // show person based on item

  function showPerson() {
    const item = reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;

  }
  
  // show next person

  nextBtn.addEventListener('click', function () {
    currentItem = (currentItem + 1) % reviews.length;
    showPerson();
  })

  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem = ((currentItem - 1) + reviews.length) % reviews.length;
    showPerson();
  })

  // show random person
  randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
  })