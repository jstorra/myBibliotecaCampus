import s from "./solicitudes.js"
const crud = ({ endpoint, tabla } = {}) => ({
    getAll: async () => await s.getAll({ endpoint }),
    getOne: async (id) => await s.getOne({ id, endpoint }),
    getRelationships: async () => await s.getRelationships({ endpoint }),
    getRelationshipsOne: async (id) => await s.getRelationshipsOne({ id, endpoint }),
    post: async (obj = {}) => await s.post({ obj, tabla, endpoint }),
    putOne: async (obj = {}) => await s.putOne({ obj, tabla, endpoint }),
    deleteOne: async (id) => await s.deleteOne({ id, endpoint }),
});
export default crud;
