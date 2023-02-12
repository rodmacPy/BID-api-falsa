import { faker } from '@faker-js/faker'
import express from 'express';
const app = express()
const port = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class Usuario {
    constructor() {
        this.id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.telefono = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Empresa {
    constructor() {
        this.id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.direccion = {
            calle: faker.address.streetAddress(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            codigopostal: faker.address.zipCode(),
            país: faker.address.country(),
        }
    }
}
app.get("/api/users/new", (req, res) => {
    res.json(new Usuario);
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa);
});

app.get("/api/user/company", (req, res) => {
    // const usuario = new Usuario()
    // const empresa = new Empresa()

    res.json(
        {
            usuario:new Usuario(),
            empresa:new Empresa()
        }
    );
});
app.listen(port, () => console.log(`Listening on port: ${port}`));