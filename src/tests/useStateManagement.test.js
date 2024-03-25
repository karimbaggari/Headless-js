import { renderHook, act } from '@testing-library/react-hooks';
import useStateManagement from '../components/useStateManagement';

test('should update state', () => {
  const { result } = renderHook(() => useStateManagement({ count: 0 }));

  act(() => {
    result.current.updateState({ count: 5 });
  });

  expect(result.current.state.count).toBe(5);
});

// Add more tests for additional functionality as needed
