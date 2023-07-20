import axios from 'axios';
import React from 'react';

const Demo = (props) => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [errored, setErrored] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setErrored(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h3>Demo Loading...</h3>
      </>
    );
  }

  if (errored) {
    return (
      <>
        <h3>Demo: Can't reach to our servers. Try again...</h3>
      </>
    );
  }

  return (
    <>
      <h3>Demo</h3>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Demo;
