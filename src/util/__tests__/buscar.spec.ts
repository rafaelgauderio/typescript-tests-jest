
import * as ModuloClientes from "../clients";
import { contagemDeClientesConcidentes } from "../search";

describe("testes da função contagemDeClientesConcidentes", () => {

    it("deve retornar zero quando nenhum dos clientes concidir com 2 clientes mockados", () => {
        jest.spyOn(ModuloClientes, "requisicaoClientes").mockReturnValue([
            {
                id: 1,
                nome: "Rafael de Luca"
            },
            {
                id: 2,
                nome: "Rafael de Souza"
            },
        ]);

        const resultado = contagemDeClientesConcidentes("Silva");
        expect(resultado).toEqual(0);

    });

    it("deve retornar 2 quando 2 dos clientes concidir com 2 clientes mockados", () => {
        jest.spyOn(ModuloClientes, "requisicaoClientes").mockReturnValue([
            {
                id: 1,
                nome: "Rafael de Luca"
            },
            {
                id: 2,
                nome: "Rafael de Souza"
            },
        ]);

        const resultado = contagemDeClientesConcidentes("Rafael");
        expect(resultado).toEqual(2);

    });

    it("deve retornar 2 quando 2 dos clientes concidir com 4 clientes mockados", () => {
        jest.spyOn(ModuloClientes, "requisicaoClientes").mockReturnValue([
            {
                id: 1,
                nome: "Rafael de Luca"
            },
            {
                id: 2,
                nome: "Rafael de Souza"
            },
            {
                id: 3,
                nome: "Claudia da Silva"
            },
            {
                id: 4,
                nome: "Maria de Luca"
            }
        ]);

        const resultado = contagemDeClientesConcidentes("Luca");
        expect(resultado).toEqual(2);       

    });

    it("deve retornar 1 quando 1 dos clientes concidir com 4 clientes mockados", () => {
        jest.spyOn(ModuloClientes, "requisicaoClientes").mockReturnValue([
            {
                id: 1,
                nome: "Rafael de Luca"
            },
            {
                id: 2,
                nome: "Rafael de Souza"
            },
            {
                id: 3,
                nome: "Claudia da Silva".toLowerCase()
            },
            {
                id: 4,
                nome: "Maria de Luca"
            }
        ]);

        const resultado = contagemDeClientesConcidentes("claudia");
        expect(resultado).toEqual(1);       

    });




});