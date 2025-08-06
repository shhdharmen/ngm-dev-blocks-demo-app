/*
	Installed from https://ui.angular-material.dev/api/registry/
	Update this file using `@ngm-dev/cli update free-stacked-lists/simple`
*/

export type Contact = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  imageUrl: string;
  lastSeen: string;
};

export const contacts: Contact[] = [
  {
    id: '1',
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    lastSeen: '3h ago',
  },
  {
    id: '2',
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://i.pravatar.cc/150?img=2',
    lastSeen: '3h ago',
  },
  {
    id: '3',
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl: 'https://i.pravatar.cc/150?img=3',
    lastSeen: 'Online',
  },
  {
    id: '4',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl: 'https://i.pravatar.cc/150?img=4',
    lastSeen: '3h ago',
  },
  {
    id: '5',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl: 'https://i.pravatar.cc/150?img=5',
    lastSeen: '3h ago',
  },
  {
    id: '6',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl: 'https://i.pravatar.cc/150?img=6',
    lastSeen: 'Online',
  },
];
