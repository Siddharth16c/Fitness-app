//connection with rapid API - exercisedb
export const exerciseOptions = {
    
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0cf6b51be3mshc1cd662f37ebc08p1d8e41jsn04498d46b898',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

export const youtubeOptions = {
  
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '0cf6b51be3mshc1cd662f37ebc08p1d8e41jsn04498d46b898',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
    

export const fetchData = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}