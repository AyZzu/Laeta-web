import axios from "axios";

// const API_KEY = "AIzaSyA_MLMwV9KCVWF0pxNGJ6mWMzQ_5G0s_pk";
// const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_YT_BASE_URL;
const PLAYLIST_ID_MILA = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_MILA;
const PLAYLIST_ID_SEVINA = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_SEVINA;
const PLAYLIST_ID_AIRI = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_AIRI;
const PLAYLIST_ID_ALUNA = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_ALUNA;
const PLAYLIST_ID_SHAON = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_SHAON;
const PLAYLIST_ID_ALTHEA = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_ALTHEA;
const PLAYLIST_ID_ORIEL = import.meta.env.VITE_PLAYLIST_ID_UPLOAD_ORIEL;

const API_KEY1 = "AIzaSyAeaf4aTrjSMG4R5R2O3V4aPxRmAvPKzks";

export const getThumbnailE1 = async () => {
  const Tbh1 = await axios.get(`${BASE_URL}/videos?id=GnnVS-L1Ojs&key=${API_KEY}&part=snippet`);
  // console.log({ Thumbs: Tbh1.data.items[0].snippet });
  return Tbh1.data.items;
};
export const getThumbnailE2 = async () => {
  const Tbh3 = await axios.get(`${BASE_URL}/videos?id=p1qkZFBSFBA&key=${API_KEY}&part=snippet`);
  // console.log({ Thumbs: Tbh3.data.items[0].snippet });
  return Tbh3.data.items;
};
export const getThumbnailE3 = async () => {
  const Tbh4 = await axios.get(`${BASE_URL}/videos?id=hdvHNTruwho&key=${API_KEY}&part=snippet`);
  // console.log({ Thumbs: Tbh4.data.items[0].snippet });
  return Tbh4.data.items;
};
export const getThumbnailE4 = async () => {
  const Tbh2 = await axios.get(`${BASE_URL}/videos?id=LU1XnZvAm0Y&key=${API_KEY}&part=snippet`);
  // console.log({ Thumbs: Tbh2.data.items[0].snippet });
  return Tbh2.data.items;
};

// export const popularVideoMila = async () => {
//   const PopularMila = await axios.get(`${BASE_URL}/search?part=snippet&channelId=UCy-330LSZFXB_nPXgviKg8g&key=${API_KEY}&order=viewCount&maxResults=4`);
//   console.log({ Popular: PopularMila.data.items });
//   return PopularMila.data.items;
// };

// MILA DRAGON API
export const ProfileMila = async () => {
  const profileMila = await axios.get(`${BASE_URL}/channels?id=UCy-330LSZFXB_nPXgviKg8g&key=${API_KEY}&part=snippet,statistics`);
  // console.log({ profile: profileMila.data });
  return profileMila.data.items;
};

export const getDebutMila = async () => {
  const debutMila = await axios.get(`${BASE_URL}/videos?id=0liOrmhzT7I&key=${API_KEY}&part=snippet`);
  // console.log({ debutMila: debutMila.data.items[0].snippet });
  return debutMila.data.items;
};

export const getVideoMila = async () => {
  const UploadMila = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_MILA}&maxResults=18&key=${API_KEY}`);
  // console.log({ Upload: UploadMila.data.items });
  return UploadMila.data.items;
};

// SEVINA REINA API
export const ProfileSevina = async () => {
  const profileSevina = await axios.get(`${BASE_URL}/channels?id=UCdj5dtnp5WEdwuASQvcQfZA&key=${API_KEY}&part=snippet,statistics`);
  console.log({ profile: profileSevina.data });
  return profileSevina.data.items;
};

export const getDebutSevina = async () => {
  const debutSevina = await axios.get(`${BASE_URL}/videos?id=2e3L-Sizf4U&key=${API_KEY}&part=snippet`);
  console.log({ debutSevina: debutSevina.data.items[0].snippet });
  return debutSevina.data.items;
};

export const getVideoSevina = async () => {
  const UploadSevina = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_SEVINA}&maxResults=18&key=${API_KEY}`);
  console.log({ UploadSevina: UploadSevina.data.items });
  return UploadSevina.data.items;
};

// AIRI AIRINTIKA API
export const ProfileAiri = async () => {
  const profileAiri = await axios.get(`${BASE_URL}/channels?id=UCnlFvQbfsH2RFUAihZxIRGg&key=${API_KEY}&part=snippet,statistics`);
  console.log({ profile: profileAiri.data });
  return profileAiri.data.items;
};

export const getDebutAiri = async () => {
  const debutAiri = await axios.get(`${BASE_URL}/videos?id=QFAoSb9owlU&key=${API_KEY}&part=snippet`);
  console.log({ debutAiri: debutAiri.data.items[0].snippet });
  return debutAiri.data.items;
};

export const getVideoAiri = async () => {
  const UploadAiri = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_AIRI}&maxResults=18&key=${API_KEY}`);
  console.log({ UploadAiri: UploadAiri.data.items });
  return UploadAiri.data.items;
};

// ALUNA DIVA API
export const ProfileAluna = async () => {
  const profileAluna = await axios.get(`${BASE_URL}/channels?id=UCk2bRG6B9T5mYDRfeN4k8-w&key=${API_KEY}&part=snippet,statistics`);
  console.log({ profileAluna: profileAluna.data });
  return profileAluna.data.items;
};

export const getDebutAluna = async () => {
  const debutAluna = await axios.get(`${BASE_URL}/videos?id=fNtXfZ2Qbmw&key=${API_KEY}&part=snippet`);
  console.log({ debutAluna: debutAluna.data.items[0].snippet });
  return debutAluna.data.items;
};

export const getVideoAluna = async () => {
  const UploadAluna = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_ALUNA}&maxResults=18&key=${API_KEY}`);
  console.log({ UploadAluna: UploadAluna.data.items });
  return UploadAluna.data.items;
};

// SHAON RIVER B API
export const ProfileShaon = async () => {
  const profileShaon = await axios.get(`${BASE_URL}/channels?id=UCaA0fTyVeb7XRmtJ9ZcBoKQ&key=${API_KEY}&part=snippet,statistics`);
  console.log({ profileShaon: profileShaon.data });
  return profileShaon.data.items;
};

export const getDebutShaon = async () => {
  const debutShaon = await axios.get(`${BASE_URL}/videos?id=8ft97rM2g84&key=${API_KEY}&part=snippet`);
  console.log({ debutShaon: debutShaon.data.items[0].snippet });
  return debutShaon.data.items;
};

export const getVideoShaon = async () => {
  const UploadShaon = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_SHAON}&maxResults=18&key=${API_KEY}`);
  console.log({ UploadShaon: UploadShaon.data.items });
  return UploadShaon.data.items;
};


// Althea Antonia API
export const ProfileAlthea = async () => {
  const profileAlthea = await axios.get(`${BASE_URL}/channels?id=UCh1hZ_Zvv3anRNH8Nh-N2WA&key=${API_KEY}&part=snippet,statistics`);
  console.log({ profileAlthea: profileAlthea.data });
  return profileAlthea.data.items;
};

export const getDebutAlthea = async () => {
  const debutAlthea = await axios.get(`${BASE_URL}/videos?id=qW_yI2J31ME&key=${API_KEY}&part=snippet`);
  console.log({ debutAlthea: debutAlthea.data.items[0].snippet });
  return debutAlthea.data.items;
};

export const getVideoAlthea = async () => {
  const UploadAlthea = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_ALTHEA}&maxResults=18&key=${API_KEY}`);
  console.log({ UploadAlthea: UploadAlthea.data.items });
  return UploadAlthea.data.items;
};


// Shiraishi Oriel API
export const ProfileOriel = async () => {
  const profileOriel = await axios.get(`${BASE_URL}/channels?id=UCksATXnF-u3-XMjsEI3-_Gw&key=${API_KEY}&part=snippet,statistics`);
  console.log({ profileOriel: profileOriel.data });
  return profileOriel.data.items;
};

export const getDebutOriel = async () => {
  const debutOriel = await axios.get(`${BASE_URL}/videos?id=HZc95aWFmM4&key=${API_KEY}&part=snippet`);
  console.log({ debutOriel: debutOriel.data.items[0].snippet });
  return debutOriel.data.items;
};

export const getVideoOriel = async () => {
  const UploadOriel = await axios.get(`${BASE_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID_ORIEL}&maxResults=18&key=${API_KEY}`);
  console.log({ UploadOriel: UploadOriel.data.items });
  return UploadOriel.data.items;
};

// INI UNTUK CARI ID PLAYHLIST DEFAULT UPLOAD UNTUK CARI RECENT UPLOAD
// export const getVideo = async () => {
//   const VideoMila = await axios.get(`${BASE_URL}/channels?id=UCh1hZ_Zvv3anRNH8Nh-N2WA&key=${API_KEY}&part=contentDetails`);
//   console.log({ VideoShaon: VideoMila.data.items[0].contentDetails.relatedPlaylists.uploads });
//   return VideoMila.data.items[0].contentDetails.relatedPlaylists.uploads;
// };

// https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCv8p8YZ5uyFho4TAXLm3WQg&maxResults=50&key=[YOUR_API_KEY]
// https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cplayer&channelId=UCv8p8YZ5uyFho4TAXLm3WQg&maxResults=25&key=[YOUR_API_KEY]
