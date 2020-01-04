import { prisma } from '../generated/prisma-client';
import { menu as menuItems } from './menu.json'


const seedDatabase = async () => {
  for (const menuItem of menuItems) {
    const dbItem = await prisma.createMenuItem({
      name: menuItem.name,
      description: menuItem.description,
      catagory: menuItem.catagory,
      type: menuItem.type,
      size: menuItem.size,
      price: Number(menuItem.pricing)
    })
  }
}
seedDatabase();

