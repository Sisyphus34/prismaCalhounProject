import { prismaObjectType } from 'nexus-prisma';

const User = prismaObjectType({
  name: 'User',
  description: 'A generic user example',
  definition(t) {
    t.prismaFields(['*']);
  },
});

export default User;
