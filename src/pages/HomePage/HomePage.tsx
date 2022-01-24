import React from 'react';
import SocialIcons from '../../components/SocialIcons';

export const HomePage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-400 justify-center">
      <div className="w-screen flex flex-col px-14 py-3 justify-self-center self-center bg-slate-300 shadow-md">
        <h1 className="font-bold text-3xl">Hok Laam Cheng</h1>
        <div className="font-thin mt-1 mb-3">
          <p>Web developer, techy, musician</p>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};
