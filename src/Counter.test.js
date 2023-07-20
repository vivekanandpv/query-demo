import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component should', () => {
  test('render Counter on the header tag', () => {
    render(<Counter />);
    const h2Element = screen.getByRole('heading');
    expect(h2Element).toHaveTextContent('Counter');
  });
});
