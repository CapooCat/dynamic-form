const PrimeReactConfig = {
  ripple: true,
  pt: {
    calendar: {
      root: "md:w-[200px] w-full date-input h-fit",
      panel: "!min-w-[initial]",
      day: "relative",
    },
    dropdown: {
      root: "md:w-[200px] w-full h-fit overflow-hidden",
      input: "p-2",
    },
    chips: {
      root: "md:w-[200px] w-full",
      container: "p-2",
      inputtoken: "p-0",
    },
    inputtext: {
      root: "md:w-[200px] w-full p-2 h-fit",
    },
    card: {
      root: "shadow-xl border rounded-xl w-fit mt-[15%] !w-[800px] max-w-[90vw]",
      title: "text-[18px]",
      content: "p-0 grid gap-2",
      body: "p-4",
    },
    button: {
      root: "h-min w-min",
    },
  },
};

export default PrimeReactConfig;
