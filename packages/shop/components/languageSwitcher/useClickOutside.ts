import { useEffect, useRef } from 'react';
export const on = (obj, ...args) => obj.addEventListener(...args);

export const off = (obj, ...args) => obj.removeEventListener(...args);

const defaultEvents = ['mousedown', 'touchstart'];

const useOutsideClick = (ref, onOutsideClick, events = defaultEvents) => {
  const savedCallback = useRef(onOutsideClick);
  useEffect(() => {
    savedCallback.current = onOutsideClick;
  }, [onOutsideClick]);
  useEffect(() => {
    const handler = event => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

export default useOutsideClick;
