const sequelize = new Sequelize({
    dialect: 'hana',
    host: '192.168.0.213',
    port: '4000',
    database: 'PRUEBAS10FEB2023',
    username: 'SYSTEM',
    password: 'Pa55w0rdSAP',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});