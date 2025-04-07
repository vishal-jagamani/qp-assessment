export const getAllGroceries = async () => {
    try {
        const data = [
            { id: 1, name: 'rice', price: 10 },
            { id: 2, name: 'wheat', price: 15 },
        ];
        return data;
    } catch (err) {
        console.log('Error in getAllGroceries service', err);
        throw err;
    }
};
