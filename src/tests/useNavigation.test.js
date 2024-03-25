import { renderHook, act } from '@testing-library/react-hooks';
import useNavigation from '../components/useNavigation';

test('should navigate to a new route', () => {
  const { result } = renderHook(() => useNavigation());

  act(() => {
    result.current.navigateTo('/new-route');
  });

  expect(result.current.currentRoute).toBe('/new-route');
});
