import Client from '../../utils/axios'

export const getEmployeeData = async () => {
  const client = new Client()
  const data = await client.getEmployeeData()
  return data.data.FirstName
}

export const checkIn = async (id, description) => {
  const client = new Client()
  const data = await client.checkIn(id, description)
  return data.data
}

export const checkOut = async (userID, recordID) => {
  const client = new Client()
  const data = await client.checkOut(userID, recordID)
  return data.data
}

export const getSummary = async (employeeID) => {
  const client = new Client()
  const records = await client.getSummary(employeeID)
  return records.data.data
}
