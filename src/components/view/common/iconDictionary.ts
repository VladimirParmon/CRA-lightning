export type Groups = 'action' | 'custom' | 'doctype' | 'standard' | 'utility' | undefined;
type IconDictionary = Record<string, { name: string; group: Groups }>;

export const ProfileDictionary: IconDictionary = {
  Company: {
    name: 'company',
    group: 'utility',
  },
  Email: {
    name: 'email',
    group: 'utility',
  },
  Phone: {
    name: 'call',
    group: 'utility',
  },
  CreatedBy: {
    name: 'user',
    group: 'utility',
  },
};
