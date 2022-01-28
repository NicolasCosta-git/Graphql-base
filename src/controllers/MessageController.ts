import 'reflect-metadata';
import { GqlGetMessageInput, GqlGetMessageResponse } from '../generated/graphql';
import { Service } from 'typedi';

@Service()
export class MessageController {
  getMessage(params: GqlGetMessageInput): GqlGetMessageResponse {
    return { message: `Hello ${params.name}` };
  }
}
