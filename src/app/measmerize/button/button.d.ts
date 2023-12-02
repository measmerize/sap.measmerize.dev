// This object is defined to allow TypeScript to compile the code.
// measmerize global object is defined in the measmerize widget's script, which is included into the index.html file.
declare let measmerize: {
  button: {
    mount: (elementNode?: HTMLElement) => void;
    unMount: (elementNode?: HTMLElement) => void;
    elementNode?: HTMLElement | null;
  };
};
