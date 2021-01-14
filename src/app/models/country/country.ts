
export class Country {
  name;
  nativeName;
  capital;
  region;
  population;
  area;
  flag;
  languages;
  constructor(
    name ='',
    nativeName ='',
    capital ='',
    region ='',
    population =0,
    area =0,
    flag ='',
    languages =''
  ){
    this.name = name;
    this.nativeName = nativeName;
    this.capital = capital;
    this.region = region;
    this.population = population;
    this.area = area;
    this.flag = flag;
    this.languages = languages;
  }
}
