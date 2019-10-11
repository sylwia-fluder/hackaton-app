import { useState, useCallback } from 'react';

export function useToggle(initialValue = false) {
    const [toggle, setToggle] = useState(initialValue);

    return [toggle, useCallback(() => setToggle(status => !status), [])];
}