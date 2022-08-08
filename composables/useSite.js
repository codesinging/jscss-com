import {useState} from "nuxt/app";
import useGet from "~/composables/useGet";

export const useSite = () => useState('site', () => ({
    name: '',
    title: '',
    keywords: '',
    description: '',
    icp: '',
}))

export const useFetchSite = async () => {
    const {data} = await useGet('settings/settings', {group: 'site'})

    return {
        name: data.value.site_name,
        title: data.value.site_title,
        keywords: data.value.site_keywords,
        description: data.value.site_description,
        icp: data.value.site_icp_beian,
    }
}

export default useSite
