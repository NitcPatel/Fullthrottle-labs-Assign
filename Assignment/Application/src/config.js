
class Config {
    static async init() {
        if(process.env.NODE_ENV === 'development') {
            Config.api = 'http://localhost:3001'
        }
    }
}
export default Config;