const greet = name => `Hello ${name}!`;

let names = ['world'];

const handleGet = (req, res) => res.send({greetings: names.map(greet)});
const handlePost = (req, res) => {
    if (!req.body || req.body.name == "") {
        console.log("Should send html response with appropriate code");

        return;
    }

    names.push(req.body.name);
    console.log(req.body);
    res.send({greetings: names.map(greet)});
};


module.exports = {handleGet, handlePost};