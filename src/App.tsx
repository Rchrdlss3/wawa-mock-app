import React, { useState, SetStateAction, createContext, Dispatch } from 'react';
import { WawaExperience, ExperienceConfig } from './types/experience';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header/headerComponent';
import { HashRouter, Routes } from 'react-router';
import { AppRoutes } from './utils/constants';
import { WAWA_THEMES } from './types/theme';

interface ExperienceContextType {
  experience: WawaExperience;
  setExperience: Dispatch<SetStateAction<WawaExperience>>
};

export const ExperienceContext = createContext<ExperienceContextType | null>(null);
const App: React.FC = () => {
  const [experience, setExperience] = useState<WawaExperience>(WawaExperience.DELIVERY);

  return (
    <HashRouter>
    <ExperienceContext.Provider value = {{experience,setExperience}}>
      <div style = {{transition: '2s', backgroundColor: WAWA_THEMES[experience].background, minWidth: '100vw', minHeight: '100vh'}}>
      <HeaderComponent />
      <Routes>
      {AppRoutes()}
      </Routes>
      <FooterComponent />
      </div>
    </ExperienceContext.Provider>
    </HashRouter>
  );
};

export default App;