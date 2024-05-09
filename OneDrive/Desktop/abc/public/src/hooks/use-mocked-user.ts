import type { IUser } from 'src/types/user';

export const useMockedUser = (): IUser => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  return {
    id: '5e86809283e28b96d2d38537',
    profilePic: '/assets/avatars/avatar-anika-visser.png',
    firstName: 'Anika Visser',
    email: 'anika.visser@devias.io',
  };
};
