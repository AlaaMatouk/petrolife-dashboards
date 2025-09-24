import React from 'react';

interface UserInfo {
  name: string;
  email: string;
  avatar: string;
}

interface UserProfileProps {
  userInfo: UserInfo;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userInfo }) => {
  return (
    <footer className="inline-flex items-center gap-3 px-2.5 py-0 relative flex-[0_0_auto] ml-[-12.00px] mt-auto">
      <div className="flex flex-col w-[184px] h-[35px] items-start gap-[3px] relative">
        <div className="relative self-stretch h-[18px] mt-[-1.00px] font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
          {userInfo.name}
        </div>
        <div className="relative self-stretch h-[18px] mb-[-3.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] text-right tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-caption-1-font-style)]">
          {userInfo.email}
        </div>
      </div>
      <img
        className="relative w-10 h-10 aspect-[1] object-cover"
        alt="User profile picture"
        src={userInfo.avatar}
      />
    </footer>
  );
};
