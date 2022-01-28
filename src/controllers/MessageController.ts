import 'reflect-metadata';
import { GqlGetComplimentInput, GqlGetMessageInput, GqlGetMessageResponse, GqlMessage } from '../generated/graphql';
import { Service } from 'typedi';

@Service()
export class MessageController {
  getMessage(params: GqlGetMessageInput): GqlGetMessageResponse {
    return { message: `Hello ${params.name}` };
  }

  getCompliment(params: GqlGetComplimentInput): GqlMessage {
    const { name, age } = params;
    if (age > 30) return { insult: `Jeez, ${name}, ur old!` };
    else return { compliment: `Nice, ${name}, you are still young!` };
  }
}
