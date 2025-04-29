import { IProduct } from "../model/IProduct"

interface Props{
    product: IProduct
}
export default function Product({product}: Props){
    return (
      <> 
        { product.isActive ? (
          <h3>{product.name} - {product.price}</h3>
        ) : <p>Ürün Satışta değil</p>}
      </>
    )
  }
  