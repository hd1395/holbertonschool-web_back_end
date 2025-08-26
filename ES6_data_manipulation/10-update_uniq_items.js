function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }
    
    map.forEach((quantity, item, mapInstance) => {
        if (quantity === 1) {
            mapInstance.set(item, 100);
        }
    });
    
    return map;
}
