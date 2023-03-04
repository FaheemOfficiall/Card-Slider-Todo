import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import"./Cards.css"


let Cards = ({title}) => {
  
  const clicks=()=>{
    document.write(` <strong>Congratulaion Your Order Place SuccesFully </strong><br/><br/>
    (One Of our Executive Contact You Very Soon)`)
    
  }
  

  
  return(
    <div  className="media-scroller ">
    {title.map((value,index)=>{
        return(

          <Card  className="media-element">
    <Card.Img variant="top" src={value.foodImage} className="mg"/>
    <Card.Body>
      <Card.Title>{value.itemName}</Card.Title>
      <Card.Text>
        {value.description}
      </Card.Text>
      <Card.Text>

 
         {/* <div> */}

         <Button style={{backgroundColor:"green"}}>10$</Button>
         {/* </div> */}
           
         </Card.Text>
         <Button variant="primary" onClick={clicks}>Buy Now</Button>
       </Card.Body>
     </Card>
        )

      })
    }
    </div>
    
    

  )
  
};


export default Cards;
