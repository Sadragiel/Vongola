import { join } from 'path';

export default {
    database: 'mongodb+srv://vongola:alognov@cluster0.n6lot.mongodb.net/vongola?retryWrites=true&w=majority',
    port: 3000,
    staticPath: join(__dirname, '../../public'),
}