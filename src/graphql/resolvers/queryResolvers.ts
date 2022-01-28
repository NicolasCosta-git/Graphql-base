import 'reflect-metadata';
export const QUERY_RESOLVERS = {
  Message: {
    __resolveType: (obj: any) => {
      if (obj.compliment) return 'Compliment';
      if (obj.insult) return 'Insult';
    },
  },
};
