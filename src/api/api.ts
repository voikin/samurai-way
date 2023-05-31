import axios from "axios";


const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': 'b48cd3f5-7cda-4a22-b331-9292412429bd'
        }
    }
)


export const usersAPI = {
    getParticipants(activePage: number, count: number) {
        return instance.get <UsersType>(`users?page=${activePage}&count=${count}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get <AuthMeType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email:string,password:string,rememberMe:boolean=false) {
        return instance.post <CommonType>(`/auth/login`,{email,password,rememberMe})
            .then(response => {
                return response.data
            })
    },

    logout() {
        return instance.delete <CommonType>(`/auth/login`)
            .then(response => {
                return response.data
            })
    }
}

export const profilesAPI = {
    getProfiles(userId: string) {
        return instance.get<ProfilesType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: any) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put<CommonType>('profile/status', {status: status})
            .then(response => {
                return response.data
            })
    },
    updateMyFoto(myFoto:File) {
        const formData = new FormData()
        formData.append('image',myFoto)
        return instance.put<ProfilePhotoType>('profile/photo', formData,{
            headers:{'Content-Type':'multipart/form-data'}
        })
            .then(response => {
                return response
            })
    }
}

export const followAPI = {
    postFollow(userId: number) {
        return instance.post<FollowType>(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },

    deleteFollow(userId: number) {
        return instance.delete<FollowType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

type ProfilePhotoType = {
    resultCode: number
    messages: Array<string>,
    data: {
        small: string
        large:string
    }
}

type CommonType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}

export type FollowType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}


export type ProfilesType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId: number
}

export type ContactsKeyType = 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram' | 'youtube' | 'github' | 'mainLink'

export type ContactsType = {
    [key in ContactsKeyType]: string | null
   /* facebook: string|null
    website: string|null
    vk: string|null
    twitter: string|null
    instagram: string|null
    youtube: string|null
    github: string|null
    mainLink: string|null*/
}


export type UsersType = {
    error: string
    items: Array<ParticipanType>
    totalCount: number
}
export type ParticipanType = {
    id: number,
    name: string,
    followed: boolean, /* полезная для меня анкета или нет*/
    status: string
    photos: {
        small: string,
        large: string
    }
}


export type AuthMeType = {
    data: DataAuthMeType
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}
export type DataAuthMeType = {
    id: number
    login: string
    email: string
}

type PhotosType = {
    small: string
    large: string
}


export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType,
    userId: number
}