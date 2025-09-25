import React from 'react';

interface LogoProps {
  primary: string;
  secondary: string;
}

export const Logo: React.FC<LogoProps> = ({ primary, secondary }) => {
  return (
    <header className="inline-flex flex-col items-start gap-2.5 px-2.5 py-0 relative flex-[0_0_auto]">
      <div className="inline-flex items-center gap-[4.15px] relative flex-[0_0_auto]">
        <img
          className="w-[72.84px] aspect-[2.22] relative h-[32.8px]"
          alt="Company logo part 1"
          src={primary}
        />
        <img
          className="w-[33.01px] aspect-[1.01] relative h-[32.8px]"
          alt="Company logo part 2"
          src={secondary}
        />
      </div>
    </header>
  );
};
