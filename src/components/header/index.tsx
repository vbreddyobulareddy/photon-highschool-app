import { FC } from "react";
import { HeaderComponentProps } from "./types";

export const HeaderComponent: FC<HeaderComponentProps> = ({title}) => {
  return (
    <>
      <div className="navbar bg-primary text-primary-content" data-testid="app_header">
        <button className="btn btn-ghost text-xl">{title}</button>
      </div>
    </>
  );
};
