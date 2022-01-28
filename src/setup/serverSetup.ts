import 'reflect-metadata';
import { QUERY_RESOLVERS } from '../graphql/resolvers/queryResolvers';
import { MUTATION_RESOLVERS } from '../graphql/resolvers/mutationResolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { MUTATION_HANDLERS } from '../handlers/mutationHandlers';
import { QUERY_HANDLERS } from '../handlers/queryHandlers';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import { graphqlHTTP } from 'express-graphql';
import { print } from 'graphql';
import express from 'express';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, '../**/*.graphql'), { recursive: true });
const mergedTypes = mergeTypeDefs(typesArray);
const schema = makeExecutableSchema({
  typeDefs: print(mergedTypes),
  resolvers: { ...QUERY_RESOLVERS, ...MUTATION_RESOLVERS },
});
export const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: { ...MUTATION_HANDLERS, ...QUERY_HANDLERS },
    graphiql: true,
  })
);
