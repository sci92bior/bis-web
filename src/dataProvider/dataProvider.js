import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://192.168.200.122:8080/api';

const convertFileToBase64 = file => new Promise((resolve, reject) => {
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);
  
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const jsonClient = (url, options = {}) => {
    const token = localStorage.getItem("access_token");
    console.log("jsonClient " + url);
    if (token != null) {
      options.user = {
        authenticated: true,
        token: `Bearer ${token}`,
      };
    }
    return fetchUtils.fetchJson(url, options);
  };

  
  


export default {
    getList: (resource, params) => {
        const { page, perPage} = params.pagination;
        const filter = params.filter;
        const { field, order } = params.sort;
        var sortOrder = order==="ASC" ? "+" :"-"
        const query = {
            sort: `${sortOrder}${field}`,
            pageNo : page,
            pageSize : perPage,
            filter: JSON.stringify(filter)
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return jsonClient(url).then(({ headers, json }) => ({
            data: json.content,
            total: json.numberOfElements
        }));
    },

    getOne: (resource, params) =>
        jsonClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    approve: (resource, params) =>
    jsonClient(`${apiUrl}/${resource}/${params.id}/approve`).then(({ json }) => ({
        data: json,
    })),

    
    getImage: (resource, source)=> {
        return Promise.resolve( jsonClient(`${apiUrl}/${resource}/${source}/image`)).then(({ body }) => ({
            data: body,}));
    },

    getThumbnail: (resource, source)=> {
        return Promise.resolve( jsonClient(`${apiUrl}/${resource}/${source}/thumbnail`)).then(({ body }) => ({
            data: body,}));
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return jsonClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return jsonClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    create: async (resource, params) => {

        console.count(params.data);

        if(resource ==="destruction" ){
            var imagesBeforeWithDescription = [];
            var imagesAfterWithDescription = [];
            var promises = [];
            params.data.photosBefore.forEach( image =>{
                promises.push(convertFileToBase64(image.photo).then(result => imagesBeforeWithDescription.push({base64:result, description: image.description})));
            }
            );

            console.log(params.data.photosAfter)

            params.data.photosAfter.forEach( image =>{
                promises.push(convertFileToBase64(image.photo).then(result => imagesAfterWithDescription.push({base64:result, description: image.description})));
            }
            );
            return Promise.resolve( Promise.all(promises)
                .then( transformedMyFile => jsonClient(`${apiUrl}/${resource}/create`, {
                    method: 'POST',
                    body: JSON.stringify({...params.data, photosBefore: imagesBeforeWithDescription, photosAfter:imagesAfterWithDescription}),
                }).then(({ json }) => ({
                    data: { ...params.data,  id: json.id },
                }))));
        }else if(resource !=="user" ){
            const myFile = params.data.pictures;
            if ( !myFile.rawFile instanceof File ){
                return Promise.reject('Error: Not a file...'); // Didn't test this...
            }
            var images = [];
            var promises = [];
            if(params.data.pictures instanceof Array){
            params.data.pictures.forEach(x => {
                promises.push(convertFileToBase64(x).then(result => images.push(result)));
              });
            }else{
                promises.push(convertFileToBase64(params.data.pictures).then(result => images.push(result)));
            }
            return Promise.resolve( Promise.all(promises)
                .then( transformedMyFile => jsonClient(`${apiUrl}/${resource}/create`, {
                    method: 'POST',
                    body: JSON.stringify({...params.data, photos: images}),
                }).then(({ json }) => ({
                    data: { ...params.data,  id: json.id },
                }))));
        }
        
        else{
        console.log(params.data);

        return Promise.resolve( jsonClient(`${apiUrl}/${resource}/create`, {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(({ json }) => ({
                data: { ...params.data,  id: json.id },
            })));
        }
    },


    update: (resource, params) =>
        jsonClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return jsonClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    delete: (resource, params) =>
        jsonClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return jsonClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    
};

