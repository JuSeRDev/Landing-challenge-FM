import { fetchDataJson } from '../../api/fetchDataJson.js'

export async function getTechnologyData() {
    const response = await fetchDataJson()
    const tech = response.technology
    return tech
}