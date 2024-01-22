// Body.tsx
import React, { ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>;
};

export default Body;