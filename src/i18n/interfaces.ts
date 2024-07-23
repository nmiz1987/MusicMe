export enum EnumCountries {
  Israel = 'Israel',
  USA = 'English',
}

export interface CountriesProps {
  title: string;
  language: string;
  flag: EnumCountries;
  textDirection: 'rtl' | 'ltr';
}

export enum EnumLanguages {
  Hebrew = 1,
  English = 2,
}
