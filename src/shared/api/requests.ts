export class Requests {
    static baseUrl = 'htttp://localhost:8080'

    static getBaseUrl = () => {
        return this.baseUrl
    }

    static GET = async (url?: string) => {
        const fullUrl = this.getBaseUrl() + url 
        await fetch(fullUrl)
    }

    static POST = async (url: string, data: Object) => {
        const fullUrl = this.getBaseUrl() + url 
        await fetch(fullUrl, {
            body: JSON.stringify(data)
        })
    }
}