import ky from 'ky'

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

const api = ky.create({prefixUrl: VITE_API_BASE_URL, retry: {limit: 0}})

export function getInfoAPI() {
    return api.get('info').json()
}

export function login(body) {
    return api.post('login', {json: body}).json()
}

export function registerUser(body) {
    return api.post('register', {json: body}).json()
}

export function verifyToken(token) {
    return api.post('verifyToken', {json: {token}}).json()
}

export function getAllConfig(token){
    const searchParams = new URLSearchParams()
    searchParams.set('token', token)
    return api.get('getAllConfig', {searchParams: searchParams}).json()
}

export function saveConfig(body) {
    return api.post('saveConfig', {json: body}).json()
}


export function getUserInfoAPI() {
    const searchParams = new URLSearchParams()
    searchParams.set('eid', localStorage.getItem('eid'))
    searchParams.set('encryptUsername', localStorage.getItem('encryptUsername'))
    return api.get('userinfo', {searchParams}).json()
}

export function delAccountAPI(body) {
    return api.post('delete', {json: body}).json()
}

export function updateAPI(body) {
    return api.post('update', {json: body}).json()
}

export function disableAPI(body) {
    return api.post('disable', {json: body}).json()
}

export function enableAPI(body) {
    return api.post('enable', {json: body}).json()
}

export function getContent() {
    return api.get('getContent').json()
}

export function setContent(body) {
    return api.post('setContent', {json: body}).json()
}

