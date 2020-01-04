import { prismaObjectType } from 'nexus-prisma';

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: t =>
    t.prismaFields({ filter: [
      'deleteManyMenuItems',
      'updateManyMenuItems'
    ]}),
});

export default Mutation;


