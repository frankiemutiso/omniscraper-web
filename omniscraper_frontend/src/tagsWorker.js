self.onmessage = (e) => {
  const url = e.data;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      self.postMessage(data);
      self.close();
    });
};
