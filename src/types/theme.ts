import { WawaExperience } from "./experience";
import wawalogo from '../utils/images/wawalogo.png';
import wawalogo_green from '../utils/images/wawalogo_green.png';

interface WawaTheme {
  background: string;
  headerBg: string;
  headerText: string;
  primaryButton: string;
  primaryButtonText: string;
  accent: string;
  cardBorder: string;
  logoImage: string;
}

export const WAWA_THEMES: Record<WawaExperience, WawaTheme> = {
  [WawaExperience.DELIVERY]: {
    background: '#F9FAFB', 
    headerBg: '#FDF3E1',    
    headerText: '#E31837',  
    primaryButton: '#E31837',
    primaryButtonText: '#FFFFFF',
    accent: '#E31837',
    cardBorder: '#F3F4F6',
    logoImage: wawalogo 
  },
  [WawaExperience.IN_STORE]: {
    background: '#FFFFFF',
    headerBg: '#E31837', 
    headerText: '#FFFFFF',
    primaryButton: '#E31837',
    primaryButtonText: '#FFFFFF',
    accent: '#212121',    
    cardBorder: '#E5E7EB',
    logoImage: wawalogo
  },
  [WawaExperience.AT_PUMP]: {
    background: '#F3F4F6',
    headerBg: '#006D43',    
    headerText: '#FFFFFF',
    primaryButton: '#006D43', 
    primaryButtonText: '#FFFFFF',
    accent: '#006D43',
    cardBorder: '#D1D5DB',
    logoImage: wawalogo_green
  }
};