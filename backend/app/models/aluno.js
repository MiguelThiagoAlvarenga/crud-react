module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define('Aluno', {
        nome: DataTypes.STRING,
        path_foto: DataTypes.STRING,
        endereco: DataTypes.STRING,
    });

    return Aluno;
}