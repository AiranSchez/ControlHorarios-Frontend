import axios from 'axios'

export default class Client {
  async getEmployeeData () {
    return await axios.get('https://flipday.es/api/employee/1').then(response => response.data)
  }

  async registerCompany (dto) {
    return await axios.post('https://flipday.es/api/companies/', dto).then(response => response)
  }
}
