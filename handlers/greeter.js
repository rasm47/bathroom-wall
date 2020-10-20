
let growingId = 0;
let names = [{id: growingId, name: 'world'}];

const findIndexOfName = id => {
    let idx = 0;
    
    for (const [i, name] of names.entries()) {
        if (name.id === id) {
            idx = i;
            break;
        }
    }

    return idx;
};

const addName = newName => names.push({id: ++growingId, name: newName});

const handleGetAll = (req, res) => res.json(names);

const handleGetOne = (req, res) => {
    const givenId = +req.params.id;
    const nameIndex = findIndexOfName(givenId);

    if (nameIndex === -1) {
        res.status(404);
        res.json({info: 'Not Found'});
    } else {
        res.json(names[nameIndex]);
    }
};

const handlePost = (req, res) => {
    if (!req.body || !req.body.name || req.body.name === "") {
        res.status(400);
        res.json({info: 'Bad request'});
        return;
    }

    addName(req.body.name);
    res.json(names[names.length - 1]);
};

const handlePut = (req, res) => {
    if (!req.body || !req.body.name || req.body.name === "") {
        res.status(400);
        res.json({info: 'Bad request'});
        return;
    }

    const givenId = req.body.id;
    const givenName = req.body.name;
    const nameIndex = findIndexOfName(givenId);

    if (nameIndex === -1) {
        res.status(404);
        res.json({info: 'Not found'});
    } else {
        names[nameIndex].name = req.body.name;
        res.json({id: givenId, name: givenName});
    }
}

const handleDelete = (req, res) => {
    if (!req.body || req.body.id === undefined) {
        res.status(400);
        res.json({info: 'Bad request'});
        return;
    }

    const givenId = +req.body.id;

    names = names.filter(name => name.id !== givenId);
    res.status(200);
    res.json({info: 'Deleted'});
}

module.exports = {handleGetOne, handleGetAll, handlePost, handlePut, handleDelete};