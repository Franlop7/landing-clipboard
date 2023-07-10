import clsx from "clsx";

interface ButtonProps extends React.ComponentProps<"button"> {
  color: "ios" | "mac";
  children: React.ReactNode;
}

function Button({ color, children }: ButtonProps) {
  const defaultStyles =
    "w-full sm:w-auto sm:px-8 p-3 text-lg text-white border-b-4 rounded-full border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg active:shadow-xs hover:translate-y-[-2px] hover:shadow-xl";

  const colors = {
    ios: "bg-strong-cyan shadow-strong-cyan/25 active:shadow-strong-cyan/10 hover:bg-strong-cyan/95 hover:shadow-strong-cyan/25",
    mac: "bg-light-conic shadow-light-conic/25 active:shadow-light-conic/10 hover:bg-light-conic/95 hover:shadow-light-conic/25",
  };

  return <button className={clsx(defaultStyles, colors[color])}>{children}</button>;
}

export default Button;
