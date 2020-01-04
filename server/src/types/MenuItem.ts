import { prismaObjectType } from 'nexus-prisma';

const MenuItem = prismaObjectType({
  name: 'MenuItem',
  description: 'A generic MenuItem example',
  definition(t) {
    t.prismaFields(['*']);
    t.field('formattedPrice', {
      type: 'String',
      resolve({ price }) {
        return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
      }
    })
  },
});

export default MenuItem;