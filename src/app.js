const db = require("./server");
const express = require("express");
const app = express();

const users = require("./database/models/users")(db);
const roles = require("./database/models/roles")(db);

const PORT = process.env.PORT || 5000;

app.get("/trial/:id", async (req, res) => {
    const { id } = req.params;

    const data = await users.findOne({
        where: { id },
        include: {
            model: roles
        }
    });

    return res.status(200).send(data);
});

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}...`);
});

