import createAxios from "../utiles/request";

const api = {
  downloadfile: "/file/download/",
};

export default function download(token,require_path){
  return createAxios({
      url:api.downloadfile,
      method:'GET',
      params:{
        token,
       require_path
      }
  })
}