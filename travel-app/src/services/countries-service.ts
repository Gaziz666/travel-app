export default class CountriesService {
  countryUrl = 'https://travel-react-app.herokuapp.com/country';

  async getResource(url?: string) {
    const res = await fetch(`${this.countryUrl}${url ? url : ''}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`could not fetch ${url}`);
    }

    return data;
  }

  async getAllCountry() {
    return await this.getResource();
  }
}
