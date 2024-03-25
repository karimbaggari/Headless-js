
import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../components/useForm';

test('should update form values', () => {
  const { result } = renderHook(() => useForm({ username: '', password: '' }));

  act(() => {
    result.current.handleChange({ target: { name: 'username', value: 'testUser' } });
  });

  expect(result.current.formValues.username).toBe('testUser');
});
