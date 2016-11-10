import React from "react";
const divStyle = {

};
export default class Skills extends React.Component {
  constructor(){
    super();
    this.state ={
      bars:[
        {
          name:"coding",
          value: 0

        },{
          name: "coding",
          value: 0
        },{
          name:"coding",
          value: 0
        }
      ]
    }
  }
  render() {

    const { bars } =this.state;

    const ProgressBars = bars.map((bar) => {

      return <li><i class="fa fa-code"></i>
                 <div class="progress">Coding
                     <div id="coding" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >

                     </div>
                   </div></li>
    })
    return (
      <div style={divStyle} class="col-lg-8 col-sm-9 col-xs-8">
      <ul id="skills"><h1>Skills</h1>
        {ProgressBars}
        </ul>
        </div>
    );
  }
}
//render() {

//  const { bars } =this.state;
// const Bars = bars.map((bar) => {

//    return <li>123</li>
//  })
//  return (
//  <div>{Bars}</div>
//  );
// }
