import axios from 'axios';

const request = axios.create({
  baseURL: `https://retoolapi.dev/geeOvB/data`,
});

const getData = async () => {
  const results = await request.get();
  return results.data;
};

const getDataFilter = async (categorys, text) => {
  const results = await request.get(`?${categorys}=${text}`);
  return results.data;
};

 async function postDataAdd (data) {
  const result = await fetch(`https://retoolapi.dev/geeOvB/data`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({task: result})
})
  const results = await request.post(null, { data });
  return await results.data;
};

export { getData, getDataFilter, postDataAdd};