const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ed6efacbb2cefb1b7c3af32a0a03e5f5",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
