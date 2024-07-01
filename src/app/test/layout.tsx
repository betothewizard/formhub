import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function layout(props: LayoutProps) {
  const {children} = props;
  return <div className="flex w-full flex-grow mx-auto">{children}</div>;
}

export default layout;