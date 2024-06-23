import { IconAlertTriangle } from "@tabler/icons-react";
import { useRef } from "react";
import { Tooltip } from "primereact/tooltip";

export default function FormError({ target, message }) {
  const tooltip = useRef(null);

  return (
    <>
      <Tooltip
        ref={tooltip}
        target={target}
        mouseTrackTop={20}
        position="bottom"
        pt={{
          text: `bg-red-600 max-w-[250px] p-0`,
          arrow: `border-none`,
        }}
      >
        {message && message.length ? (
          <div className="p-4">
            <h1 className="col-span-full flex items-center gap-2 pb-1 font-bold leading-3">
              <IconAlertTriangle size={16} stork={1.5} className="mb-[0.1em]" />
              Invalid
            </h1>
            <section className="grid grid-flow-col items-center">
              <span>{message}</span>
            </section>
          </div>
        ) : (
          <></>
        )}
      </Tooltip>
    </>
  );
}
