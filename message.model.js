/**
 * @author Pimenta
 */
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

    static newEmptyMessage() {
        return new Message();
    }
  }
  module.exports = Message