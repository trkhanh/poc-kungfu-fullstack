export function renderIf(condition, renderFn) {
    return condition ? renderFn() : null
}

export function subString(string, length = 0) {
    return string.length > length ? `${string.substr(0, length)}...` : string;
}

export function duplicate(object) {
    return Object.assign({}, object)
}

export function nullToEmptyString(value) {
    return value === null ? '' : value
}

export function nullToZero(value) {
    return value === null ? 0 : value
}

export function plural(value) {
    return value === 1 ? '' : 's'
}

export function isEmpty(obj) {
    let name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}

// Slug
export function slug(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        //.replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')            // Trim - from end of text
}

// Routing
export function getRoutesForStack(routes) {
    return Object.values(routes).reduce((result, route) => {
        result[route.name] = route
        return result
    }, {})
}
