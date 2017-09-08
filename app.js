


var GroceryList = (props) => {

var onListItemClick = (event) => {
    console.log('I got clicked');
  };

return (
 <div>
    <ul>
      <li onClick={onListItemClick}>{props.groceries[0]}</li>
      <li>{props.groceries[1]}</li>
      <li>{props.groceries[2]}</li>
    </ul>

    </div>
 
)};


var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['butter', 'flour', 'eggs']}/> 
    </div>
);

ReactDOM.render(<App/> , document.getElementById('app'));



