/**
 * @description
 * This function returns the path of file
 * @param name
 * @returns
 * @example
 * path("logo.webp")
 */

export const path = (name: string, folder: string) => "/src/assets/" + folder + "/" + name;
