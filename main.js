class HTMLElement {
  foo = 12; // this.foo = 12

  constructor(tagName, className, id) {
    this.tagName = tagName;
    this.className = className;
    this.id = id;
  }

  rotate() {
    console.log('rotating from HTMLElement', this.tagName);
  }

  render() {
    console.log('rendering from HTMLElement', this.tagName);
  }
}

class HTMLAnchor extends HTMLElement {
  href = '';

  #c3 = 25; // private c3 = 25

  constructor(href, ...arg) {
    super(...arg); // < --- must have call parent constructor
    this.href = href;
  }

  // ---- computed ---
  get hrefWithoutProtocol() {
    return this.href.slice(9); // https:://
  }

  set hrefWithoutProtocol(v) {
    if (true) {
      this.href = v;
    }
  }

  // --- access to private --
  // security read
  get c3() {
    return this.#c3;
  }

  // security set
  set c3(v) {
    // s
    if (true) {
      this.#c3 = v;
    }
  }

  redirect() {
    console.log('redirecting...', this.tageName);
  }

  // polymorphism

  rotate() {
    console.log('Prepareing rotate from HTMLAnchor', this.tagName);
  }
}

class HTMLElementInput extends HTMLElement {
  #value = '';
  valid = false;

  constructor(value, ...args) {
    super(...args);
    this.value = value;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value.trim();
  }

  validate() {
    if (this.#value) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}

const input = new HTMLElementInput('Tanya', 'input', 'my-input', 'input1');
input.validate();
console.log(input, input.valid);
input.value = '';
input.validate();
console.log(input, input.valid);
