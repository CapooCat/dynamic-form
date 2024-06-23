import { classNames } from "primereact/utils";

const PrimeReactConfig = {
  ripple: true,
  pt: {
    calendar: {
      root: "md:w-[200px] w-full date-input h-fit bg-gray-900/40",
      panel: "!min-w-[initial] bg-gray-900/50 backdrop-blur text-white",
      header: "bg-transparent border-black",
      daylabel: "hover:bg-gray-500/40",
      previousbutton: "text-white",
      nextbutton: "text-white",
      select: "text-white",
      day: "relative",
    },
    dropdown: {
      root: "md:w-[200px] w-full h-fit overflow-hidden bg-gray-900/40 border-black",
      input: "p-2 text-white",
      panel: "!bg-gray-900/50 backdrop-blur border-black",
      header: "bg-transparent border-black",
      item: ({ context }) => ({
        className: classNames("text-white hover:bg-gray-500/20", {
          "bg-primary": context.selected,
        }),
      }),
      filterinput: "bg-gray-900/40 text-white border-black",
    },
    chips: {
      root: "md:w-[200px] w-full",
      container: "p-2 bg-gray-900/40 border-black",
      input: "text-white",
      token: "bg-primary text-white",
      inputtoken: "p-0",
    },
    inputtext: {
      root: "md:w-[200px] w-full p-2 h-fit bg-gray-900/40 text-white border-black",
    },
    card: {
      root: "shadow-xl border border-black rounded-xl w-fit md:mt-[20%] mt-[10%] !w-[800px] max-w-[90vw] backdrop-blur bg-gray-900/50 text-white",
      title: "text-[18px]",
      content: "p-0 grid gap-2",
      body: "p-4",
    },
    button: {
      root: "h-min w-min bg-gradient-to-r from-primary to-blue-500",
    },
  },
};

export default PrimeReactConfig;
