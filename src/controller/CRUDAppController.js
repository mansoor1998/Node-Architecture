const CrudAppController = (repository) => {
    GetAll = (req, res) => {
        repository.GetAll();
        res.send({ "message": "This is a get all function" });
    }

    GetById = (req, res) => {
    }

    Create = (req, res) => {
        res.send({ "message": "This is a Create function" });
    }

    Update = (req, res) => {
        res.send({ "message": "This is a update function" });
    }

    Delete = (req, res) => {
        res.send({ "message": "This is a Delete function"});
    }

    return {
        GetAll,
        GetById,
        Create,
        Update,
        Delete
    }
}

module.exports = { CrudAppController }
