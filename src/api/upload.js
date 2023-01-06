import createAxios from "../utiles/request";

const api = {
  showfile: "/file/upload/",
};

export default function getfile(newData){
    return createAxios({
        url:api.showfile,
        method:'POST',
        data:{
          file:newData
        }
    })
}