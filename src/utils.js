/**
 * @param  {String} name
 * @return {String}
 */
export const getCSSVar = (name) => {
    return getComputedStyle(document.body).getPropertyValue(name).trim();
};
