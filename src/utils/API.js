import axios from 'axios'

const instance = axios.create({
    baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1`
})

export const API = {
    sendRequest(url,method="Get",data=null,headers={}){
        return axios({
            url: url,
            method: method,
            data: data,
            headers: headers
        })
    },
    getToken() {
        return instance.get('/token')

    },
    getPosition() {
        return instance.get(`/positions`)
            .then((response => {
                return response.data
            }))
    },
    getUsers(page = 1, count = 6) {
        return instance.get(`/users?page=${page}&count=${count}`)
            .then((response => {
                return response.data
            }))
    },
    setNewUser(formData, token) {
        return axios({
            url: `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
            method: 'POST',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Token": token
            }
        })

    }

}