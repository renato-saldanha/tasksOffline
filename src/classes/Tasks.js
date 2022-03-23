export default {
  mostrarTasksConcluidas: true,
  tasksVisiveis: [],
  tasks: [
    {
      id: 1,
      descricao: 'Comprar Livro',
      dataEstimada: new Date(),
      dataConclusao: new Date(),
    },
    {
      id: 2,
      descricao: 'Ler Livro',
      dataEstimada: new Date(),
      dataConclusao: null,
    },
    {
      id: 3,
      descricao: 'Arrumar a Casa',
      dataEstimada: new Date(),
      dataConclusao: null,
    },
    {
      id: 4,
      descricao: 'Fazer Compras',
      dataEstimada: new Date('2022-04-15'),
      dataConclusao: null,
    },
    {
      id: 5,
      descricao: 'Levar Cachorro Passear',
      dataEstimada: new Date('2022-04-15'),
      dataConclusao: null,
    },
    {
      id: 6,
      descricao: 'Comprar Presente',
      dataEstimada: new Date('2022-05-25'),
      dataConclusao: null,
    },
  ],
};
