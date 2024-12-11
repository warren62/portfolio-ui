import { format } from 'date-fns';

const NASA_API_KEY = 'OUglulkWhUypTytmdHNOa5V383PWM1woloIg3Nn6';
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

async function fetchApod(apodRequest) {
  let url = BASE_URL;

  if (apodRequest.count) {
    url += `&count=${apodRequest.count}`;
  }
  if (apodRequest.start) {
    const startDate = format(apodRequest.start, 'yyyy-MM-dd');
    url += `&start_date=${startDate}`;
    if (apodRequest.end) {
      const endDate = format(apodRequest.end, 'yyyy-MM-dd');
      url += `&end_date=${endDate}`;
    }
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Error fetching APOD data');
  const data = await response.json();
  
  if (Array.isArray(data)) {
    return data.filter(item => item.media_type === 'image');
  } else {
    return data.media_type === 'image' ? [data] : [];
  }
}

export async function getApods(apodRequest) {
  return await fetchApod({ ...apodRequest });
}

export async function getNewApod() {
  const data = await fetchApod({ count: 1 });
  return data[0];
}

export async function appendApods(apodRequest) {
  return await fetchApod(apodRequest);
}
