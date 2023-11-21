import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
const CarouselImg = styled.img`
max-width: 500px;
width: 100%;
height: auto;
opacity: 0;
transition: 2s;
&.loaded {
    opacity: 1;
}
`;

const CarouselBtnContainer = styled.div `
display: flex;
align-content: center;
flex-direction: row;
margin-top: 15px;
`;

const CarouselBtn = styled.button`
color: white;
background-color: #fac819;
padding: 8px;
margin: 0 5px;
`;


export default function Carousel({showBtns}){

    const imgs =["penhouse.jpg","tablero.jpg","herreria.jpg", "compresor.jpg" ];

    const [selectedIndex, setSelectedIndex ]= useState(0);
    const [SelectedImg, setSelectedImg] = useState(imgs[0]);
    const [loaded, setLoaded] = useState(false);
    const [autoplay, setAutoplat] =useState(true);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(autoplay && !showBtns ){
                selectedNewImg(selectedIndex, imgs)}  
        },3000);

        return ()=>clearInterval(interval);
    },[autoplay, selectedIndex, imgs])


    const selectedNewImg =(index, imgs, next=true)=>{
        setLoaded(false);
        setTimeout(()=>{
            const condition = next ? selectedIndex < imgs.length-1: selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1: 0): (condition?selectedIndex -1 : imgs.length-1);
            setSelectedIndex(nextIndex);
            setSelectedImg(imgs[nextIndex]);
        },500)
    }

    const Previous =()=>{
        setAutoplat(false);
        selectedNewImg(selectedIndex,imgs, false);
    };

    const Next =()=>{
        setAutoplat(false);
        selectedNewImg(selectedIndex,imgs);
    }


    return <>
    
    <Container>
        <CarouselImg src={require(`../img/${SelectedImg}`)} 
            alt="img carousel"
            className ={loaded ? "loaded": ""}
            onLoad={()=> setLoaded(true)} 
            />

        <CarouselBtnContainer>
            {
                showBtns ?
                <>
                    <CarouselBtn onClick={Previous}> {"<"} </CarouselBtn>
                    <CarouselBtn onClick={Next}> {">"} </CarouselBtn> 
                </>:
                <></>
            }
        </CarouselBtnContainer>
    </Container>
    </>
}