import axios from 'axios';
import { useQuery } from 'react-query';

export const getUsers = () => {
  return axios.get('http://localhost:5000/users').then((r) => r.data);
};

const Sample = (props) => {
  const { isLoading, data, isError } = useQuery('get-users', getUsers);

  if (isLoading) {
    return (
      <>
        <h3>Demo Loading...</h3>
      </>
    );
  }

  if (isError) {
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
          {data.map((u) => {
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

export default Sample;
