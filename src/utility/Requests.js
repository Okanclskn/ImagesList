import unsplashAPI from "../api/unsplashAPI";
class Requests {
  static async ImagesRequest(term) {
    const response = await unsplashAPI.get("search/photos", {
      params: { query: term },
    });
  }
}

export default Requests;
