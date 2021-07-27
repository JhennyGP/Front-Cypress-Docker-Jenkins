import Base from './_base.page.js'
import { Carrinho as cart} from './components/leitura.elements.js'

export class Carrinho extends Base{
    static add_prod_carrinho(){
        super.clickOnElement(cart.ADD_CARRINHO)
    }
    static mensagemSucesso(){
        super.getElementContaining(cart.ALERT_SUCESSO)
    }
}