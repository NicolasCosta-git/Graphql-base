import 'reflect-metadata';
import {
  GqlComplexObject,
  GqlGetComplimentInput,
  GqlGetMessageInput,
  GqlGetMessageResponse,
  GqlMessage,
} from '../generated/graphql';
import { Service } from 'typedi';

const array: GqlComplexObject = { object: [{ name: 'Maria' }, { name: 'Mariana' }, { name: 'Mercedes' }] };

@Service()
export class MessageController {
  getMessage(params: GqlGetMessageInput): GqlGetMessageResponse {
    return { message: `Hello ${params.name}` };
  }

  getCompliment(params: GqlGetComplimentInput): GqlMessage {
    const { name, age } = params;
    if (age == 100) return array;
    if (age > 30) return { insult: `Jeez, ${name}, ur old!` };
    else return { compliment: `Nice, ${name}, you are still young!` };
  }
}
