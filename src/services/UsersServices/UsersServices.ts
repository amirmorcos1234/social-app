/* eslint-disable @typescript-eslint/no-unsafe-return */
import ENDPOINTS from '@services/Endpoints/Endpoints';
import api from '@services/index';

const getUsers = async () => {
  const res = await api.get(ENDPOINTS.users);
  return res.data;
};

export { getUsers };
