// domain/.netlify/functions/1-hello

const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    // const { data } = await axios.get("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/1-hello");
    rederHTML(data);
  } catch (error) {
    rederHTML(error.response.data);
  }
};

const rederHTML = (data) => {
  result.textContent = data;
};

// invoke fetchData function
fetchData();
