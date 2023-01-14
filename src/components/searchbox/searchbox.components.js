import { Component  } from "react";
import './search-box.css';

class SearchBox extends Component{
    render(){
        return(
            <input 
            className='search-box'
            type= 'search'
            placeholder="Enter Monsters"
            onChange={(this.props.onSearchChangeHandler)}
              />
        );
    }
}

export default SearchBox;