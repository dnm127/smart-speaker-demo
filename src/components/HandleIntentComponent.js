import { BaseComponent, Component, Intents } from '@jovotech/framework';
import { getInput } from '../helper/getInput';

import { YesNoOutput } from '../output/YesNoOutput';
import { getWeatherInfo } from '../apiHandler/index';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
@Component()
export class HandleIntentComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Welcome to Alexa Demo!' });
  }

  // @Intents('YesIntent')
  // yesIntent() {
  //   return this.$send({ message: 'Yes! I love pizza, too.' });
  // }

  // @Intents('NoIntent')
  // hatesPizza() {
  //   return this.$send({ message: `That's OK! Not everyone likes pizza.` });
  // }

  @Intents('CancelIntent')
  cancelIntent() {
    return this.tell({ message: 'You have quitted the skill. See you later.' });
  }

  @Intents('TurnOnTelevisionIntent')
  turnOnTelevisionIntent() {
    const television = getInput(this, 'television');
    const turn_on = getInput(this, 'turn_on');
    console.log('test', this.getEntityMap());
    console.log('Synonym Television: ', television);
    console.log('Synonym Turn On: ', turn_on);
    console.log('API handling, logic handling ...');
    // TODO: Call API, logic handling
    return this.$send({ message: 'The television is turned on. What else can I do for you?' });
  }

  @Intents('GetWeatherIntent')
  async getWeatherIntent() {
    const data = await getWeatherInfo();
    console.log('Data', data);

    // eslint-disable-next-line prettier/prettier
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;
    const city = data.name;

    return this.$send({
      message: `The temperature in ${city} right now is ${temperature} celsius, ${description}. What else can I do for you?`,
    });
  }

  UNHANDLED() {
    return this.START();
  }
}
