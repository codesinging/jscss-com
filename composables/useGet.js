import {useFetch, useRuntimeConfig} from "nuxt/app";

const useGet = async (url, params = {}, options = {}) => {
    const config = useRuntimeConfig()
    url = config.public.baseUrl + url
    options.params = params
    options.transform = options.transform ?? (data => data.data)
    return useFetch(url, options)
}

export default useGet
