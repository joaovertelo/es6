class Message {
  constructor (text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }

  get created() {
    return this._created;
  }
  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Invalid created');
    }
    this._created = created;
  }

  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString() {
    return `Photo ${super.toString()}` +
      `-- Url: ${this.url}` +
      `-- Thumbnail: ${this.thumbnail}`;
  }
}

var mensagem = new Message();
var photoMessage = new ImageMessage();

console.log(String(mensagem));
console.log(String(photoMessage));

console.log(photoMessage instanceof Message);
console.log(Message instanceof ImageMessage);