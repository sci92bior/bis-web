import { AuthProvider, fetchUtils, localStorageStore } from 'react-admin';

const authProvider: AuthProvider = {
     login: ({ username, password}) => {
    // force homeserver for protection in case the form is manipulated
    var base_url = "http://192.168.93.122:8080/api";

    console.log("login ");
    const options = {
      method: "POST",
      body: JSON.stringify(
        Object.assign(
          {
            username,
            password,
          },
        )
      ),
    };

    const login_api_url = base_url + "/auth/sign-in";

    return fetchUtils.fetchJson(login_api_url, options).then(({ json }) => {
      localStorage.setItem("permissions", JSON.stringify(json.roles));
      localStorage.setItem("access_token", json.token.accessToken);
      localStorage.setItem("full_name", `${json.firstName} ${json.lastName} `);
    });
  },
  logout: () => {
    console.log("logout");
    var base_url = "http://192.168.93.122:8080/api";

    const logout_api_url =
      base_url+ "/auth/sign-out";
    const token = localStorage.getItem("access_token");
    const options = {
      method: "POST",
      user: {
        authenticated: true,
        token: `Bearer ${token}`,
      },
      body: JSON.stringify(
        Object.assign(
          {
            token
          },
        )
      ),
    };

    
      localStorage.removeItem("access_token");
      localStorage.removeItem("permissions")
     
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    console.log("checkError " + status);
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const access_token = localStorage.getItem("access_token");
    console.log("checkAuth " + access_token);
    return typeof access_token === "string"
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    let permissions : string | null= localStorage.getItem('permissions')
    return permissions!==null ? Promise.resolve(JSON.parse(permissions)) : Promise.reject();
  },

    getIdentity: () =>{
      const fullName = localStorage.getItem("full_name");


        return Promise.resolve({
            id: 'user',
            fullName:`${fullName}`,
        
        })}

};

export default authProvider;
