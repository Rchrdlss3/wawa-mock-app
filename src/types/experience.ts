// types/experience.ts
export enum WawaExperience { 'DELIVERY', 'IN_STORE' , 'AT_PUMP'};

export interface ExperienceConfig {
  themeColor: string;
  primaryAction: string;
  showRewards: boolean;
  layout: 'list' | 'grid' | 'focused';
}