import axios from 'axios';

export const fetchHits = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=yNPR-89yPZQuBhnaYzUSUIH46QCcVM51IVaOx0cg-RM`
  );
  console.log(response);

  console.log(response.data);

  return response.data;
};
