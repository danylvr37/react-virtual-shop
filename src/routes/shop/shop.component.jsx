import { Row } from 'antd'
import { ProductCard } from '../../components/product-card/product-card.component'
import SHOP_DATA from '../../shop-data.json'

export const Shop = () => {
  return (
    <div>
      <Row gutter={16} justify='space-around'>
        {SHOP_DATA.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </div>
  )
}
