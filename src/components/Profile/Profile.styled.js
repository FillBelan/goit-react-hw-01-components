import styled from "styled-components";

export const ProfileStyle = styled.div`
background-color: white;
border: 1px solid lightgray;
border-radius: 10px;
width: 600px;
height: 1000px;
padding-top: 40px;
display: flex;
justify-content: space-between;
flex-direction: column;
box-shadow: 3px 3px 1px 0px rgba(34 34 34 / 11%);
`

export const CardStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 35px;
`

export const DescriptionStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 25px;
`

export const ImgStyle = styled.img`
border-radius: 50%;
border: 1px solid gray;
width: 80%;
`

export const NameStyle = styled.p`
font-size: 60px;
font-weight: 800;
margin: 0;
`

export const TagStyle = styled.p`
font-size: 40px;
font-weight: 400;
margin: 0;
color: grey;
`
export const LocationStyle = styled.p`
font-size: 40px;
font-weight: 400;
margin: 0;
color: grey;
`

export const StatsStyle = styled.ul`
list-style: none;
display: flex;
background-color: lightblue;
margin: 0;
padding: 0;
height: 20%;
`
export const StatsList = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 33%;
border: 1px solid gray;
gap: 20px;
`

export const LabelStyle = styled.span`
font-family: 'Helvetica Neue';
font-size: 30px;
font-weight: 200;
color: grey;
`

export const QuantityStyle = styled.span`
font-family: 'Oxygen';
    font-weight: 900;
    font-size: 50px;
color: red;
`