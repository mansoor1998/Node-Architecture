const CrudAppController = (repository) => {
    GetAll = (req, res) => {
        repository.GetAll();
        res.send({ "message": "This is a get all function" });
    }
    GetAll.Method = 'GET';

    GetById = (req, res) => {
    }
    GetById.Method = 'GET';

    Create = (req, res) => {
        res.send({ "message": "This is a Create function" });
    }
    Create.Method = 'POST';

    Update = (req, res) => {

    }
    Create.Method = 'PUT';

    Delete = (req, res) => {

    }
    Delete.Method = 'DELETE';

    return {
        GetAll,
        GetById,
        Create,
        Update,
        Delete
    }
}

module.exports = { CrudAppController }
