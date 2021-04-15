const host = '';

const request = (config) => {
  let { method = 'GET', api, option } = auth(config);
  let defaultOption = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  return fetch(api, {
    ...defaultOption,
    ...option
  }).then(res => res.json());
}


const auth = (config) => {
  let { method = 'GET', api, params, option } = config;
  if (method == 'GET' || method == 'DELETE') {

  } else {

  }
  return {
    method,
    api,
    option,
  }
}



const http = {
  host,
  isDev: host != '',
  request,
  get(config) {
    return request({ ...config, method: 'GET'});
  },
  post(config) {
    return request({ ...config, method: 'POST' });
  },
  delete(config) {
    return request({ ...config, method: 'DELETE' });
  },
  put(config) {
    return request({ ...config, method: 'PUT' });
  },
}

export default http;