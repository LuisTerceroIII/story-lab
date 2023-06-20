import React from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../services/firebase/firebaseConfig';
import { useUserStore } from '../../store/userStore/userStore';


export function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  const { setStoreUser } = useUserStore();
  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setStoreUser(user)
        console.log('User is signed in');

      } else {
        // User is signed out
        console.log('User is signed out');
        setStoreUser(null)
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user
  };
}