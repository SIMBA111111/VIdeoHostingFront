export class Requests {
    static baseUrl = 'http://localhost:8080'

    static getBaseUrl = () => {
        return this.baseUrl
    }

    static GET = async (url: string) => {
        const fullUrl = this.getBaseUrl() + url 
        
        return await fetch(fullUrl)
    }

    static POST = async (url: string, formData: FormData) => {
        const fullUrl = this.getBaseUrl() + url 
        return await fetch(fullUrl, {
            method: 'POST',
            body: formData
        })
    }
}