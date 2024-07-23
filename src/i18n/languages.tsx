import { EnumCountries, CountriesProps } from './interfaces';

const countries: CountriesProps[] = [
  {
    title: 'עברית',
    language: 'he-IL',
    flag: EnumCountries.Israel,
    textDirection: 'rtl',
  },
  {
    title: 'English',
    language: 'en-US',
    flag: EnumCountries.USA,
    textDirection: 'ltr',
  },
];

export default countries;
