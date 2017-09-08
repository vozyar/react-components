


var GroceryList = (props) => (
 <div>
  Grocery List
    <ul>

      <li>{props.groceries[0]}</li>
      <li>{props.groceries[1]}</li>
    </ul>

    </div>
 
);


var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceries={['butter', 'flour']}/> 
    </div>
);

ReactDOM.render(<App/> , document.getElementById('app'));



