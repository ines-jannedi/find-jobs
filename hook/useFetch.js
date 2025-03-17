import {useState, useEffect} from 'react'
import axios from "axios"

const useFetch = () => {
  const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/estimated-salary',
  params: {
    job_title: 'nodejs developer',
    location: 'new york',
    location_type: 'ANY',
    years_of_experience: 'ALL'
  },
  headers: {
    'x-rapidapi-key': 'c8fa5538b3msh63f9c0d60fcdb42p1c3b88jsndd02a5d8b862',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();
  
  return (
    <div>useFetch</div>
  )
}

export default useFetch