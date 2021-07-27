@carrinho
Feature: Carrinho
    Como usuário
    Quero adicionar meus produtos selecionados ao carrinho
    
    Scenario: Adicionar produto selecionado ao carrinho
        Given que esteja na página do produto selecionado
        When clicar em adicionar ao carrinho
        Then deverá ser mostrado uma mensagem de sucesso

    Scenario: Exibir carrinho
        When clicar no carrinho 
        And clicar em exibir carrinho
        Then deverá ser redirecionado para a página de carrinho de compras
        And deverá ser exibido o produto adicionado
