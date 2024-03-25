import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useDataFetching from '../components/useDataFetching';

describe('useDataFetching', () => {
  // Mock fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'mocked data' }), // Mocked response data
    })
  );

  beforeEach(() => {
    fetch.mockClear(); // Clear mock function before each test
  });

  it('should fetch data from the provided URL', async () => {
    const url = 'https://example.com/api/data'; // Mock URL

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useDataFetching(url));

    expect(result.current.isLoading).toBe(true); // Verify isLoading state while fetching

    await waitForNextUpdate(); // Wait for next update (when data is fetched)

    expect(result.current.isLoading).toBe(false); // Verify isLoading state after fetching
    expect(result.current.data).toEqual({ data: 'mocked data' }); // Verify fetched data
    expect(result.current.error).toBe(null); // Verify no error occurred
  });

  it('should handle fetch error', async () => {
    const url = 'https://example.com/api/data'; // Mock URL

    // Mock fetch function to throw an error
    fetch.mockImplementationOnce(() => Promise.reject(new Error('fetch error')));

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useDataFetching(url));

    expect(result.current.isLoading).toBe(true); // Verify isLoading state while fetching

    await waitForNextUpdate(); // Wait for next update (when fetching completes)

    expect(result.current.isLoading).toBe(false); // Verify isLoading state after fetching
    expect(result.current.data).toBe(null); // Verify no data fetched (due to error)
    expect(result.current.error.message).toBe('fetch error'); // Verify the error message
  });
});
