import { requisicaoClientes } from "./clients"


export const contagemDeClientesConcidentes =  (parteDoNome: string) => {

  const vetorClientes = requisicaoClientes ();

  let contador =0;

  for (let i=0; i < vetorClientes.length; i++) {
    if(vetorClientes[i].nome.includes(parteDoNome)) {
      contador++;
    }
  }

  return contador;

}