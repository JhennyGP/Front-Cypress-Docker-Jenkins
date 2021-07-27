/// <reference types="cypress" />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import {Leitura} from '../../pages/leitura.page'
import {Carrinho} from '../../pages/carrinho.page'

Given(`que esteja na página do produto selecionado`, () => {
	Leitura.verificar_produto_leitura()
});

When(`clicar em adicionar ao carrinho`, () => {
    Carrinho.add_prod_carrinho()
});

Then(`deverá ser mostrado uma mensagem de sucesso`, () => {
	Carrinho.mensagemSucesso()
});

When(`clicar no carrinho`, () => {
	cy.StepNotImplemented()
});

And(`clicar em exibir carrinho`, () => {
	cy.StepNotImplemented()
});

Then(`deverá ser redirecionado para a página de carrinho de compras`, () => {
	cy.StepNotImplemented()
});

And(`deverá ser exibido o produto adicionado`, () => {
	cy.StepNotImplemented()
});
