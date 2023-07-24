import axios from 'axios';
import React from 'react';

const User = (props) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then((r) => {
      setUser(r.data);
    });
  }, []);

  return (
    <>
      <p data-testid='email'>{user.email}</p>
    </>
  );
};

export default User;
