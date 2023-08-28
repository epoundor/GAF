import  axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.interceptors.request.use((req) => {
  req.params['t']=new Date();
  return req
})

export const getSpotLight = async () => {
  return (await api.get('wp/v2/posts/', {
    params: {
      categories: 3,
      order: 'desc',
      orderby: 'date',
      per_page: 1,
      // t:Date.now()
    }})).data;
}

export const getMag = async (page=1) => {
  const res = (await api.get('wp/v2/posts/',
    {
      params: {
      categories: 3,
      order: 'desc', orderby: 'date', offset: 4 * (page - 1) + 1,
      per_page: 4,
      // t:Date.now()

    }
    }));
  return {
    data: res.data,
    totalPages: res.headers['x-wp-totalpages'],
    total: res.headers['x-wp-total']
  }
}

export const getActuality = async (per_page = 9, page = 1) => {
  const res = (await api.get('wp/v2/posts/', {
    params: {
      categories: 8,
      order: 'desc',
      orderby: 'date',
      per_page: per_page,
      page: page,
      // t:Date.now()
      
  }}));
  return {
    data: res.data,
    totalPages: res.headers['x-wp-totalpages'],
    total: res.headers['x-wp-total']
  }
}

export const getInterview = async (per_page = 9, page = 1) => {
  const res = (await api.get('wp/v2/posts/', {
    params: {
      categories: 7,
      order: 'desc',
      orderby: 'date',
      per_page: per_page,
      page: page,
      // t:Date.now()
      
  }}));
  return {
    data: res.data,
    totalPages: res.headers['x-wp-totalpages'],
    total: res.headers['x-wp-total']
  }
}

export const getArticle = async (slug: string | number) => {
    if(!slug) return ''
  return (await api.get('wp/v2/posts/', {
    params: {
      slug,
      // t:Date.now()
    }

  })).data;
}

export const getFeaturedMedia = async (id: string | number) => {
    if(!id) return ''
    return (await api.get(`wp/v2/media/${id}`)).data.source_url;
}

export const getTag = async (id: string | number) => {
    if(!id) return ''
    return (await api.get(`wp/v2/tags/${id}`)).data.name;
}

export const getTags = async (arr: number[])=>{
  if (!arr) return []
  const newArr: string[] = []
  
  for (let index = 0; index < arr.length; index++) {
    newArr.push(String(await getTag(arr[index])))
  }
    return newArr
}

export const getSocialLink = async () => {
    return (await api.get('wp/v2/social-links')).data;
}

export const getJoinUsLink = async () => {
    return (await api.get('wp/v2/social-links')).data.join_us_link;
}

export const getPubURL = async () => {
    return (await api.get('wp/v2/pub')).data;
}