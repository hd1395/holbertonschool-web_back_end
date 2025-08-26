export default function createInt8TypedArray(length, position, value) {
    // Check if position is within valid range
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    
    // Create ArrayBuffer with specified length
    const buffer = new ArrayBuffer(length);
    
    // Create DataView to manipulate the buffer
    const view = new DataView(buffer);
    
    // Set the Int8 value at the specified position
    view.setInt8(position, value);
    
    return view;
}
