/**
 * @description
 * This function is used to import all images from a folder.
 * @param name
 * @returns
 * @example
 * pathImages("image.png")
 */

export function pathImages(name: string) {
    return "/src/assets/images/" + name;
}

/**
 *  @description
 *  This function is used to import all files from a folder.
 * @param name
 * @returns
 * @example
 * pathFiles("file.pdf")
 */

export function pathFiles(name: string) {
    return "/src/assets/downloads/" + name;
}
