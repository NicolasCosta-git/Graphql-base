import 'reflect-metadata';
import { MUTATION_HANDLERS } from '../handlers/mutationHandlers';
import { QUERY_HANDLERS } from '../handlers/queryHandlers';
import { loadFilesSync } from '@graphql-tools/load-files';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, print } from 'graphql';
import { mergeTypeDefs } from '@graphql-tools/merge';
import express from 'express';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, '../**/*.graphql'), { recursive: true });
const mergedTypes = mergeTypeDefs(typesArray);
const schema = buildSchema(print(mergedTypes));
export const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: { ...MUTATION_HANDLERS, ...QUERY_HANDLERS },
    graphiql: true,
  })
);
