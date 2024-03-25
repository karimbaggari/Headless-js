import { renderHook, act } from '@testing-library/react-hooks';

import useModal from '../components/useModal';

test('should open and close modal', () => {
  const { result } = renderHook(() => useModal());

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.openModal();
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.closeModal();
  });

  expect(result.current.isOpen).toBe(false);
});
