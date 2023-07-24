import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Counter from './Counter';

afterEach(() => {
  cleanup();
});

describe('Counter component should', () => {
  test('render Counter on the header tag', () => {
    render(<Counter />);
    const h2Element = screen.getByRole('heading');
    expect(h2Element).toHaveTextContent('Counter 0');
  });

  test('renders the initial counter on the span', () => {
    render(<Counter />);
    const span = screen.getByTestId('counter-span');
    expect(span).toHaveTextContent('0');
  });

  test('renders the incremented counter in the span after increment button is clicked', async () => {
    render(<Counter />);
    const btn = screen.getByTestId('inc-btn');
    fireEvent.click(btn);
    const span = screen.getByTestId('counter-span');
    expect(span).toHaveTextContent('1');
  });

  test('renders the decremented counter in the span after decrement button is clicked', () => {
    render(<Counter />);
    const span = screen.getByTestId('counter-span');
    const btn = screen.getByTestId('dec-btn');
    fireEvent.click(btn);
    expect(span).toHaveTextContent('-1');
  });
});
