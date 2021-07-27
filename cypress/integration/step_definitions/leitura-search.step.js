/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import {Leitura} from '../../pages/leitura.page'

Given(`que esteja na página principal`, () => {
	Leitura.acessar_leitura()
});

When(`fazer uma pesquisa`, () => {
	Leitura.pesquisar_leitura()
});

Then(`deverá ser mostrado todos os produtos relacionados a pesquisa`, () => {
	Leitura.lista_produtos_leitura()
});

When(`selecionar o primeiro produto`, () => {
	Leitura.selecionar_produtos_leitura()
});

Then(`deverá abrir a página do produto selecionado`, () => {
	Leitura.verificar_produto_leitura()
});