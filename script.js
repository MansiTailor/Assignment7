
function CounterClick(){
  
  var [products,setProducts]=React.useState([
    { name:"Latte", qty: 0 , price:220},
    { name:"Espresso ", qty: 0 ,price:250},
    { name:"Macchiato", qty: 0 ,price:110},
    { name:"Americano", qty: 0 ,price:165},
    { name:"Mocha", qty: 0 , price:150},
    { name:"Affogato", qty: 0 , price:180},
    { name:"Irish", qty: 0 , price:120}
    
  ]);
   var totalQty=()=>{
     var total=0;
     products.forEach(item => {
       total +=item.qty;
     });
     return total;
   };

  var totalAmount = () =>{
    var amount =0;
    products.forEach(item => {
      amount += item.qty * item.price ;
    });
    return amount;
  }
  
  const manageQty = (index,qty) =>{
    var change =[...products];
    change[index]={...change[index], qty: qty};
    setProducts(change);
  }
  
  return(
    <div>
      <h1>Cart Items </h1>
      { 
        products?.map((item,index) => 
        <div key={index}>
       
            <h3>{item.name} Qty :{item.qty}  Price :{item.price}</h3>
            <button style={{ backgroundColor: "Green", color:"white",fontfamily:"italic"}} onClick={ () => manageQty(index,item.qty +1)}>Add Coffee</button>
            <button style={{ backgroundColor: "Red", color:"white"}} onClick= {() => item.qty == 0 ? 0 : manageQty(index,item.qty -1)}>Remove to cart </button>    
        </div>
       )
     }
    
      <h3 style={{ backgroundColor: "Purple", color:"white"}} >Total Quantity :{totalQty()} </h3>
      <h3 style={{ backgroundColor: "Blue", color:"white"}} >Total Amount : {totalAmount()}</h3>
  </div>
  );
}
ReactDOM.render(
  <CounterClick/>,
  document.getElementById('root')
);
