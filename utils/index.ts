export async function fetchCars() {
  const headers = {
    headers: {
      "X-Api-Key": "DAIrBdwOdDsPh7MOh6yJvg==dqB2RNtZUUxAp7Pz",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWUyYzEyMjA0YjUyMzYyYWEwZTkyMWJmM2RmOTg2NiIsIm5iZiI6MTczOTg2NTk5MC44MDgsInN1YiI6IjY3YjQzZjg2NGU4OWNjZDc4ODZlMDQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D693odKVafICI0ve85t407G_-A1B9VNZWlArgfaWFOM",
    },
  };

  const response = await fetch(
    "https://api.api-ninjas.com/v1/cars?model=corolla",
    {
      headers: headers.headers,
    }
  );
  const result = await response.json();
  return result;
}
