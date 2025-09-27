import { HTMLAttributes } from "react";
export default function Card({
  className = "",
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={("card p-5 " + className).trim()} {...rest} />;
}
