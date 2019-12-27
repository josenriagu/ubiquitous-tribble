class About {
  constructor(props) {
    this.name = props.name;
    this.intro = props.intro;
  }
}

class Human extends About {
  constructor(props) {
    super(props)
    this.likes = props.likes;
  }
  hello() {
    tempAlert(`${this.intro}! My name is ${this.name}. Me love ${this.likes[0]} and ${this.likes[1]}`, 5000);
  }
}

const say = new Human({
  name: "Jose",
  intro: "Hallo",
  likes: [
    "buiding functional teams ❤️",
    "making things work 😇"
  ]
})

function tempAlert(message, duration) {
  let p = document.createElement('p');
  p.innerText = message;
  let el = document.getElementById("greet");
  let button = document.getElementById("button");

  setTimeout(function () {
    p.parentNode.removeChild(p);
    el.appendChild(button);
  }, duration);

  button.parentNode.removeChild(button);
  el.appendChild(p);
}

export default say;