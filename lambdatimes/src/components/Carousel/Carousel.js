import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';
// Complete this Carousel 
const CarouselDiv = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  @media(min-width: 1200px){
    width: 1200px;
  }

`;

const LeftButton = styled.div `
    top: 50%; 
    left: 25px;
    transform: translate(0, -50%);
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  z-index:+9;
  font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
      color:black;
      background-color:white;
      border: 2px solid black;
    }
`;



const RightButton = styled.div `
    top: 50%; 
    right: 25px;
    transform: translate(0, -50%);
    z-index:+9;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
      color:black;
      background-color:white;
      border: 2px solid black;
    }
`;


export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state ={
      imageDisplayed:'',
      imageNumber:''
    }

  }
  componentDidMount(){
    this.setState({
      imageDisplayed:carouselData[0],
      imageNumber:0

    })

  }
 

  leftClick = () => {
    this.setState(st =>{
      if(st.imageNumber === 0){
      st.imageNumber = carouselData.length - 1
      }
      else{
        st.imageNumber -= 1;
      }
      console.log(st.imageNumber)
     return (st.imageDisplayed = carouselData[st.imageNumber], setTimeout(this.leftClick,2000))

    })
  }

  rightClick = () => {
      this.setState(st =>{
        if(st.imageNumber === (carouselData.length - 1)){
          st.imageNumber = 0
        }
        else{
          st.imageNumber += 1
        }
        console.log(st.imageNumber)
        return (st.imageDisplayed = carouselData[st.imageNumber], setTimeout(this.rightClick,2000))
      })
  }
 

  selectedImage = () => {
    return <img src={this.state.imageDisplayed} alt='' style={{display: 'block', width:'100%'}} />
  }
  
  render(){
    return (
      <CarouselDiv>
       {this.selectedImage()}
        <LeftButton onClick={this.leftClick} >{"<"}</LeftButton>
        <RightButton onClick={this.rightClick} >{">"}</RightButton>
      </CarouselDiv>
    )
  }
}