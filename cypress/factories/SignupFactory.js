const faker = require('faker')
const cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        const firstName = faker.name.findName()
        const lastName = faker.name.lastName()

        const data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '1199999999',
            address: {
                cep: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg',

        }

        return data
    }
}