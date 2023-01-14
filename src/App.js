import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/searchbox/searchbox.components';

class App extends Component {

   constructor(){

    super();

    this.state = {

     monsters: [
      {
        name: 'Linda',
        id: '4561',
        email: 'linda@gmail.cm'
      },

      {
        name: 'Rocky',
        id: '5781',
        email: 'rcky@gmail.cm'
      },
      {
        name: 'dwen',
        id: '5751',
        email: 'dwen@gmail.cm'
      },

      {
        name: 'helan',
        id: '0681',
        email: 'helan@gmail.cm'
      },

      {
        name: 'jimmy',
        id: '5780',
        email: 'jimmy@gmail.cm'
      },

      {
        name: 'jack',
        id: '7980',
        email: 'jacky@gmail.cm'
      },

      {
        name: 'Robert',
        id: '57',
        email: 'robby@gmail.cm'
      },

      {
        name: 'Mill Marshal',
        id: '578',
        email: 'marshal@gmail.cm'
      },

      
     ],

     searchField: "",

    };
   }

   onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    
  
  this.setState(() => {
    return { searchField };
  });
}


    render(){
      const filteredMonsters = this.state.monsters.filter((monsters)=> {
        return monsters.name.toLocaleLowerCase().includes(this.state.searchField);
      });

    return(
         <div className='App'>
          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox onSearchChangeHandler = {this.onSearchChange} />
           <CardList monsters={filteredMonsters}/>

         </div>
    );
    
  }
}

export default App;
