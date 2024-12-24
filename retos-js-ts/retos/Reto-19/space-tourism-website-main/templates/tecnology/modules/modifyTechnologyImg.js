export const modifyTechnologyImg = async (techObject, img, index) => {
    if (screen.width >= 500) img.src = '../../' + techObject[index].images.landscape
    else img.src = '../../' + techObject[index].images.portrait
    img.alt = techObject[index].name
}