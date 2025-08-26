export default function cleanSet(set, startString) {
    if (!startString || typeof startString !== 'string') {
        return '';
    }
    
    const filteredValues = [];
    
    for (const value of set) {
        if (value && value.startsWith(startString)) {
            filteredValues.push(value.slice(startString.length));
        }
    }
    
    return filteredValues.join('-');
}
