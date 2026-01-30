export class Requests {
    static baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

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