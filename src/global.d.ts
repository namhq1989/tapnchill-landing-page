declare interface Window {
  fastspring?: {
    builder: {
      reset: () => void;
      add: (product: string) => void;
      tag: (data: { [key: string]: string }) => void;
      checkout: () => void;
    };
  };
}