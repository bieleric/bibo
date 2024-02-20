import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

enablePromise(true);

export const connectToDatabase = async () => {
  return openDatabase(
    {name: 'yourProjectName.db', location: 'default', createFromLocation: 1},
    () => {
      console.log('Connected to database');
    },
    error => {
      console.error(error);
    },
  );
};
