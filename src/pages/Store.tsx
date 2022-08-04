import { Col, Row} from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import "../../public/style.css"

export function Store() {
    return (
      <>
      <h1 className="store-header">Weasleys' Wizard Wheezes</h1>
      <h6 className="store-subtitle">Deliveries are made by the owl post!</h6>
      <Row md={2} xs={1} lg={3} className="g-3" >
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} /></Col>
        ))}
        
      </Row>
      </>
    )
  }
  