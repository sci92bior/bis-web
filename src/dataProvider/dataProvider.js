import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://192.168.93.122:8080/api';

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
        var sortOrder = order==="ASC" ? "+" :"-"
        const query = {
            sort: `${sortOrder}${field}`,
            pageNo : page,
            pageSize : perPage,
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return jsonClient(url).then(({ headers, json }) => ({
            data: json.content,
            total: json.numberOfElements
        }));
    },

    create: async (resource, params) => {

        console.count(params.data);

        if(resource ==="destruction" ){            
            return Promise.resolve(  jsonClient(`${apiUrl}/${resource}/create`, {
                    method: 'POST',
                    body: JSON.stringify({...params.data}),
                }).then(({ json }) => ({
                    data: { ...params.data,  id: json.id },
                })));
        }else if(resource !=="user" ){
            
            return Promise.resolve( jsonClient(`${apiUrl}/${resource}/create`, {
                    method: 'POST',
                    body: JSON.stringify({...params.data}),
                }).then(({ json }) => ({
                    data: { ...params.data,  id: json.id },
                })));
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
    addUserMark: (params) => {
        return jsonClient(`${apiUrl}/course/mark`, { 
            method: 'PUT',
            body : JSON.stringify({
                description : params.description,
                studentId: params.participantId,
                topicId: params.topic_id,
                isPlus : params.isPlus
            }),
        }).then(({ json }) => ({ data: json }));
    },

    markTopicAsDone: (id) => {
        return jsonClient(`${apiUrl}/course/topic/${id}`, { 
            method: 'PUT',
           
        }).then(({ json }) => ({ data: json }));
    },

    
};

