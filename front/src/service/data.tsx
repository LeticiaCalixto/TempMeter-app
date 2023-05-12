import client from './config';

const tempsPath = '/temps';

export async function getTemps() {
    try {
        const response = await client.get(`${tempsPath}`);

        return response.data;
    } catch (e) {
        return e;
    }
};