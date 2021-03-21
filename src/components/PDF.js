import React from 'react'
import ReactToPdf from 'react-to-pdf'
import {Table} from 'react-bootstrap'
import { Component } from 'react'
const ref =React.createRef()
class PDF extends Component {
    state={
        month:' ',
        portfolio:' ',
        sector:'',
        amount:'',
        submitted:false
      }
    
      onChange= input=> e =>{
        this.setState({
          [input]: e.target.value
        })}
    
      submitButton=(e)=>{
        if(!this.state.portfolio || !this.state.amount){
          alert('All fields are required')
          e.preventDefault()
        }
        else{this.setState({
          submitted:true
        })}
      }
 render(){
    return (
        
        <div>
        {/*<div className='Post' ref={ref}>
            <h1>{props.portfolio}</h1>
            <p>{props.amount}</p>
        </div>
        <ReactToPdf targetRef={ref} filename='post.pdf'>
            {({toPdf})=><button onClick={toPdf}>Download</button>}
        </ReactToPdf>*/}
        <div>
    
    <div style={{}} ref={ref}><div>
        <h4>Networth Values</h4>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>Month</th>
      <th>Portfolio Value(In INR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dec-19</td>
      <td><input onChange={this.onChange('portfolio')} className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Jan-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
     
    </tr>
    <tr>
      <td>Feb-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
     
    </tr>
    <tr>
      <td>Mar-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Apr-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>May-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
     
    </tr>
    <tr>
      <td>Jun-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Jul-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Aug-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Sep-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Oct-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
     
    </tr>
    <tr>
      <td>Nov-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Dec-20</td>
      <td><input onChange={this.onChange('portfolio')}  className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
     
    </tr>
  </tbody>
</Table> 

<h4>Sector Allocation</h4>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Sector</th>
      <th>Amount in INR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FMCG</td>
      <td><input onChange={this.onChange('amount')} className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>BFSI</td>
      <td><input onChange={this.onChange('amount')} className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
     
    </tr>
    <tr>
      <td>Auto</td>
      <td><input onChange={this.onChange('amount')} className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Pharma</td>
      <td><input onChange={this.onChange('amount')} className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    <tr>
      <td>Infra</td>
      <td><input onChange={this.onChange('amount')} className="mb-3" type='number' style={{ background: 'transparent', border: 'none',borderBottom: '1px solid black'}}></input></td>
      
    </tr>
    </tbody>
    </Table>
        </div></div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf} className="btn btn-outline-primary" >Generate pdf</button>
        )}
    </ReactToPdf>
</div>

        </div>
    )
        }
}

export default PDF