class About {
  constructor(props) {
    this.name = props.name;
    this.intro = props.intro;
  }
}

class Human extends About {
  constructor(props) {
    super(props);
    this.likes = props.likes;
  }
  hello() {
    tempAlert({
      message: `${this.intro}! My name is ${this.name}. Me love ${this.likes[0]} and ${this.likes[1]}`,
      duration: 5000,
      attribute: 'message',
      el: 'greet',
      button: 'button',
    });
  }
}

const say = new Human({
  name: 'Jose',
  intro: 'Hallo',
  likes: ['building functional teams ❤️', 'making things work 😇'],
});

export function tempAlert(params) {
  let p = document.createElement('p');
  // add a data-testid attribute; useful when testing for the element
  p.setAttribute('data-testid', params.attribute);
  p.innerText = params.message;
  let el = document.getElementById(params.el);
  let button = document.getElementById(params.button);

  setTimeout(function () {
    p.parentNode.removeChild(p);
    el.appendChild(button);
  }, params.duration);

  button.parentNode.removeChild(button);
  el.appendChild(p);
}

export default say;
