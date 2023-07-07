function listImages(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          return data;
        } else {
          return null;
        }
      })
      .catch(error => {
        console.log(error);
        return null;
      });
  }
  