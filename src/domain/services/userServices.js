import Client from '../../utils/axios'

export const loginUser = async (dto) => {
  const client = new Client()
  return await client.loginUser(dto)
}
