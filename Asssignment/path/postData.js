export function PostData(type, userdata){

  let Baseurl = 'https://github.com/sshaik71/lol';

  return new Promise((resolve, reject)) {

    fetch(BAseurl+type)
    .then((response)) => response.json())
    .then((response.Json))=>{
      resolve (responseJson);
    })
    .catch((erroe))=> {
      reject(error);
    });
  });
}
