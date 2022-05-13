export async function getBanners() {
  const { photos } = await fetch('https://api.pexels.com/v1/curated?per_page=10', {
    headers: {
      Authorization: '563492ad6f91700001000001023c69e8e8914c63b29e56a52efcbf2a'
    }
  }).then(res => res.json());
  return photos.map(p => ({
    id: p.id,
    url: p.src.landscape
  }));
}