import 'reflect-metadata';
import { GqlQueryGetComplimentArgs } from './../generated/graphql';
import { GqlQueryGetMessageArgs } from '@/generated/graphql';
import { MessageController } from '../controllers/MessageController';
import { Container } from 'typedi';

const messageController = Container.get(MessageController);

export const QUERY_HANDLERS = {
  getMessage: (args: GqlQueryGetMessageArgs) => messageController.getMessage(args.params),
  getCompliment: (args: GqlQueryGetComplimentArgs) => messageController.getCompliment(args.params),
};
