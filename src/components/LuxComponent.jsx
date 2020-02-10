import React, { Component } from 'react'; 

class LuxComponent extends Component {

  render() {
    return (
      <div className=" LoL">
        <div> 
        {this.props.questionText}
        </div>  
      <div>
      {this.props.answers}  
      </div>
      </div>
    );
    }
}

// export default LuxComponent; 
export {LuxComponent};



