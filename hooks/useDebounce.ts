import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    {/* Timer for 500 ms or we can use a specified delay that we can pass. Meant to prevent overfloww*/}
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;