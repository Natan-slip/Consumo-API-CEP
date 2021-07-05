'use strict'

const preenchendoFormulario = (getAdress) => {

    document.getElementById('endereco').value = getAdress.logradouro;
    document.getElementById('bairro').value =   getAdress.bairro;
    document.getElementById('cidade').value =   getAdress.cidade;
    document.getElementById('estado').value =   getAdress.estado;

}

const dadosCep = async () => {
    const cep = document.getElementById('cep').value;
    const url =  `https://api.postmon.com.br/v1/cep/${cep}`;
    const dados = await fetch(url);
    const getAdress = await dados.json();
    preenchendoFormulario(getAdress)

}

document.getElementById('cep').addEventListener('focusout',dadosCep)


/** 
'use strict'
const viaCep = () => {
    const cleanImput = () => {
        document.querySelector('#endereco').value = data.logradouro
        document.querySelector('#bairro').value = data.bairro
        document.querySelector('#cidade').value = data.localidade
        document.querySelector('#estado').value = data.uf

    }

    const getCep = async () => {
        cleanImput()

        const cep = document.querySelector('#cep').value
        const url = `http://viacep.com.br/ws/${cep}/json/`

    }

    document.querySelector('#cep').addEventListener('focusout', getCep)
}

const postmon = () => {
    const cleanImput = () => {
        document.querySelector('#endereco').value = data.logradouro
        document.querySelector('#bairro').value = data.bairro
        document.querySelector('#cidade').value = data.localidade
        document.querySelector('#estado').value = data.uf

    }

    const getCep = async () => {
        cleanImput()

        const cep = document.querySelector('#cep').value
        const url = `https://api.postmon.com.br/v1/cep/${cep}`

    }

    document.querySelector('#cep').addEventListener('focusout', getCep)
}

const cepAberto = () => {

    const cleanImput = () => {
        document.querySelector('#endereco').value = data.logradouro
        document.querySelector('#bairro').value = data.bairro
        document.querySelector('#cidade').value = data.localidade
        document.querySelector('#estado').value = data.uf

    }

    const getCep = async () => {
        cleanImput()

        const token = "a191993838e081e390a42646852b566a"
        const headers = {
            Authorization: 'Bearer token=a191993838e081e390a42646852b566a',
            method: 'get',
            cache: 'default',
            credentials: 'include',
            mode: 'no-cors'
        }

        const cep = document.querySelector('#cep').value
        const url = `https://www.cepaberto.com/api/v3/cep?cep=${cep}`

    }

    document.querySelector('#cep').addEventListener('focusout', getCep)
}
*/