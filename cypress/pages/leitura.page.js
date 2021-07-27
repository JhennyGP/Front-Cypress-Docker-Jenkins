import Base from './_base.page.js'
import { Pesquisa as busca} from './components/leitura.elements.js'
import { Produtos as prod } from './components/leitura.elements.js'

export class Leitura extends Base{
    static acessar_leitura(){
        cy.visit('/')
    }

    static pesquisar_leitura(){
        super.typeValue(busca.INP_PESQUISA, "Neil Gaiman")
        //cy.get(Pesquisa.INP_PESQUISA).type("Neil Gaiman")
        super.clickOnElement(busca.BTN_PESQUISA)
    }

    static lista_produtos_leitura(){
        super.verifyIfElementExists(prod.BOX_PRODUTOS)
    }

    static selecionar_produtos_leitura(){
        super.clickOnElement(prod.SEL_PRODUTO_1)
    }

    static verificar_produto_leitura(){
        super.verifyIfElementExists(prod.INFO_PRODUTO)
    }
}   