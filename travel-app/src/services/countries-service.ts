export default class CountriesService {
  _countryUrl = 'https://travel-react-app.herokuapp.com/country';

  async getResource(url?: string) {
    const res = await fetch(`${this._countryUrl}${url ? url : ''}`);
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
