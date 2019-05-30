export const getConfig = () => {
    const env = process.env
    return {
        url: {
            lf: env.VUE_APP_URL_LF,
            ct: env.VUE_APP_URL_CT,
            lg: env.VUE_APP_URL_LG
        }
    }
}

export default {}
