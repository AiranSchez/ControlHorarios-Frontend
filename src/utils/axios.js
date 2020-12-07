import axios from 'axios'

export default class Client {
  async getEmployeeData () {
    return await axios.get('https://flipday.es/api/employee/1').then(response => response.data)
  }
}
