import { HTMLAttributes } from "react";
export default function Container({
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={("container " + className).trim()} {...rest} />;
}
