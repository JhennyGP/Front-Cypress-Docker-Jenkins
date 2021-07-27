@pesquisarProd
Feature: Pesquisa
    Como usuário
    Quero fazer uma pesquisa na Leitura
    
    @search
    Scenario: Pesquisar por produto
        Given que esteja na página principal
        When fazer uma pesquisa
        Then deverá ser mostrado todos os produtos relacionados a pesquisa

    Scenario: Escolher um produto
        When selecionar o primeiro produto
        Then deverá abrir a página do produto selecionado