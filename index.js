const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');
/**
 * @author Pimenta
 */

const mensagem = new Message();
const photoMessage = new ImageMessage();


class MessagesService {

  constructor() {
    let resolvePromise;
    let rejectPromise;
    //carrega o arquivo.
    const filePath = path.join(__dirname, 'messages.json');

    /**
     * Promise é um objeto usado para processamento assincrono, que representa um valor
     * que pode estar disponivel agora, no futuro ou nunca.
     */
    this.messagesPromise = new Promise( (resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        rejectPromise(err);
      } else {
        const dataArray = JSON.parse(data);
        const dataObj = dataArray.map(item => new Message(item.text, item.created));
        resolvePromise(dataObj);
      }
    });
  }

  get messages() {
    return this.messagesPromise;
  }
}

const messagesService  = new MessagesService();

messagesService.messages.then((messages) => {
//resolve
for (let x = 0; x < messages.length; x+=1) {
  console.log(messages[x]);
}
}).catch((err) => {
//reject
console.log(err);
});

