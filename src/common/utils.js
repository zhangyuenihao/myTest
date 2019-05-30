export const getConfig = () => {
    const env = process.env
    return {
        url: env.VUE_APP_URL
    }
}

export default {}
