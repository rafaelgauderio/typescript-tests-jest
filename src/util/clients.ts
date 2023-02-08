import { Cliente } from "../types/client";

// requisicao de um array de clientes
export const requisicaoClientes = (): Cliente[] => {
  return [
    {
      id: 1,
      nome: "Rafael de Luca",
    },
    {
      id: 2,
      nome: "João da Silva",
    },
    {
      id: 3,
      nome: "João da Souza",
    },
    {
      id: 4,
      nome: "Maria de Luca",
    },
    {
      id: 5,
      nome: "Claudia Moraes",
    },
    {
      id: 6,
      nome: "Luciana Maria Mello",
    },
    {
      id: 7,
      nome: "Maria da Silva",
    },
  ];
};