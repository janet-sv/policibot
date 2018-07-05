import switchcase from 'utils/switchcase';

class securityService {
  endpoint = process.env.REACT_APP_API_URL;

  async getComplaint(id) {
    const url = `${this.endpoint}/messages/${id}/`;

    const response = await fetch(url);

    if (!response.ok) {
      const error = switchcase({
        '404': 'The complaint code given does not exist'
      })('An unexpected error ocurred')(response.status);

      throw new Error(`Not found complaint with given code ${data.status}`);
    }

    const data = await response.json();

    if (data.Error) {
      throw new Error(`There was an error in the response ${data.Error}`);
    }

    return data.type === 2
      ? {
        sex: data.genre,
        latitude: data.latitude,
        longitude: data.longitude,
        evidenceUrl: data.evidence_media,
        isAnonymous: !!data.name,
        name: data.name,
        status: data.status,
        kind: data.kind,
        detail: data.description,
      }
      : null;
  }

  async getHeatMapPoints() {
    const url = `${this.endpoint}/messages`;

    const response = await fetch(url);

    if (!response.ok) {
      const error = switchcase({
        '404': 'Theres not complaints',
      })('An unexpected error ocurred')(response.status);

      throw new Error(`Not found complaints ${data.status}`);
    }

    const data = await response.json();

    if (data.Error) {
      throw new Error(`There was an error in the response ${data.Error}`);
    }

    return data.map((complaint) => ({
      latitude: complaint.latitude,
      longitude: complaint.longitude,
      kind: complaint.kind,
    }));
  }

  async getDistricsComplaints() {
    const url = `${this.endpoint}/messages/districts/`;

    const response = await fetch(url);

    if (!response.ok) {
      const error = switchcase({
        '404': 'Theres not districts',
      })('An unexpected error ocurred')(response.status);

      throw new Error(`Not found distritcs ${data.status}`);
    }

    const data = await response.json();

    if (data.Error) {
      throw new Error(`There was an error in the response ${data.Error}`);
    }

    return data.map((district, key) => ({
      id: key,
      district: district.name,
      stole: district.data['HURTO'],
      rob: district.data['ROBO'],
      violent: district.data['ACOSO-VIOLACION'],
      drugs: district.data['DROGAS'],
      murder: district.data['HOMICIDIO'],
      others: district.data['OTROS'],
    }));
  }
}

export default new securityService();
