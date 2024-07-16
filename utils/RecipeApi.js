export default class RecipeApi {
  constructor(query) {
    this.params = new URLSearchParams({
      type: "public",
      q: query,
      app_id: "3286f965",
      app_key: "7a19b6ea3ce9defec65341f59ea7794a",
    });
  }

  getRecipe() {
    return fetch(`https://api.edamam.com/api/recipes/v2?${this.params}`, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else return Promise.reject(`Error: ${res.status}`);
    });
  }
}
