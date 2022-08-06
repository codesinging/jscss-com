import {useFetch, useRuntimeConfig} from "nuxt/app";

const useGet = async (url, params = {}, options = {}) => {
    const config = useRuntimeConfig()
    url = config.public.baseUrl + url
    options.params = params
    return useFetch(url, options)
}

export default useGet
