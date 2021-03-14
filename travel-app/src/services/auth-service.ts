export default class AuthService {
  serverUrl = 'https://travel-react-app.herokuapp.com';

  async getResource(url?: string) {
    const res = await fetch(`${this.serverUrl}${url ? url : ''}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`could not fetch ${url}`);
    }

    return data;
  }

  async createNewUser() {
    const res = await fetch(`${this.serverUrl}/user/register`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`could not fetch `);
    }

    return data;
  }

  async getAllCountry() {
    return await this.getResource();
  }

  async addNewUser() {
    return await this.createNewUser();
  }
}
