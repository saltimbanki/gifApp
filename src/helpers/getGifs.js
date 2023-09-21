export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=A23fV2UXIXBsfk98nEVLNaWHvyZ062gT&q=${categoria}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_downsampled.url,
  }));
  console.log(gifs);
  return [...gifs,...gifs];
};
