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

    const settings = data.value.data

    return {
        name: settings.site_name,
        title: settings.site_title,
        keywords: settings.site_keywords,
        description: settings.site_description,
        icp: settings.site_icp_beian,
    }
}

export default useSite
