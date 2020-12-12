import Client from '../../utils/axios'

export const registerCompany = async (dto) => {
  const client = new Client()
  return await client.registerCompany(dto)
}

export const createEmployee = async (dto, companyID) => {
  const client = new Client()
  return client.createEmployee(dto, companyID)
}

export const getEmployees = async (companyID) => {
  const client = new Client()
  return client.getEmployees(companyID)
}

export const updateEmployeeStatus = async (companyID, UserID, status) => {
  const client = new Client()
  return client.updateEmployeeStatus(companyID, UserID, status)
}
