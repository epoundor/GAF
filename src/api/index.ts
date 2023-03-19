import  axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((req) => {
  console.log(req.params);
  
  return req
})

export const getSpotLight = async () => {
  return (await api.get('wp/v2/posts/', {
    params: {
      categories: 3,
      order: 'desc',
      orderby: 'date',
      per_page: 1,
      t:Date.now()
    }})).data;
}

export const getMag = async (page=1) => {
  const res = (await api.get('wp/v2/posts/',
    {
      params: {
      categories: 3,
      order: 'desc', orderby: 'date', offset: 4 * (page - 1) + 1,
      per_page: 4,
      t:Date.now()

    }
    }));
  return {
    data: res.data,
    totalPages: res.headers['x-wp-totalpages'],
    total: res.headers['x-wp-total']
  }
}

export const getBlog = async (per_page = 9, page = 1) => {
  const res = (await api.get('wp/v2/posts/', {
    params: {
      categories: 2,
      order: 'desc',
      orderby: 'date',
      per_page: per_page,
      page: page,
      t:Date.now()
      
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
      t:Date.now()
    }

  })).data;
}

export const getFeaturedMedia = async (id: string | number) => {
    if(!id) return ''
    return (await api.get(`wp/v2/media/${id}`)).data.source_url;
}