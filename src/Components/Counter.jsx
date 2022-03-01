
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => { //useSelector allows you to select specific pieces from your store
  const dispatch = useDispatch();//directly calls back to the store's action labels
  const counter = useSelector(state => state.counter); //state.counter being the defualt state that can be affected by dispatched actions

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT'})//must match exactly as labeled in the store
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT'})//must match exactly as it does in the store
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {//setting up the same function as above as a class based component. 
//   incrementHandler() {
//     this.props.increment()//makes a call to the dispatcher
//   }

//   decrementHandler() {
//     this.props.decrement()//makes a call to the dispatcher
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter// default state, props is informed of default state
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT'}),//what the action is labeled as
//     decrement: () => dispatch({ type: 'DECREMENT'})//what the action is labeled as
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);//import the connect component, pass both ToProps methods and then the component name