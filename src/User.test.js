import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import User from './User';
import axios from 'axios';

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

jest.mock('axios');

describe('User component should', () => {
  test('renders the email queried from the backend at mounting', async () => {
    //  must declare before the render
    axios.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: {
          email: 'vivek@gmail.com',
        },
      })
    );

    render(<User />);

    //  wait for the assertions
    await waitFor(async () => {
      //  this is crucial
      const p = await screen.getByTestId('email');
      expect(p).toHaveTextContent('vivek@gmail.com');
    });
  });
});
