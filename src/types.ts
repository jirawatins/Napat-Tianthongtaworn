import Lenis from 'lenis';

declare global {
  interface Window {
    lenis?: Lenis;
  }

  interface Document {
    startViewTransition(callback: () => void): {
      ready: Promise<void>;
      finished: Promise<void>;
      updateCallbackDone: Promise<void>;
    };
  }
}
