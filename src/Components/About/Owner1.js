import React from 'react';
import styled from 'styled-components';
import aboutImg from "../Images/CEO.jpg";
import { Fade } from 'react-awesome-reveal';
const Owner1 = () => {
    return (
        <>
            <Section>
                <Container>
                    <TextContent><Fade direction="top-left">
                        <h3>ceo of companay</h3>
                        <h1 className="disney-titles">Zain Khalid</h1>
                        <h2>Electrical Engineer</h2>
                        <p>The Qualificaitons of Zain Khalid is B.Sc Electrical Engineering (UET Lahore). Zain Khalid is the Founder of Imaan Engineering LTD. He is also the creator of the core energy intelligence and management technologies embedded in the Imaan Engineering Smart Solar System.</p></Fade>
                    </TextContent>
                    <ImgContent>
                        <Fade direction="up"><img src={aboutImg} alt="about/img" /></Fade>
                    </ImgContent>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    position: relative;
    padding: 50px 7%;
    margin-bottom: 0;
    background: 0 0;
    color: #000;

    @media screen and (max-width: 991px){
        padding: 35px 50px;
    }
    @media screen and (max-width: 767px){
        padding: 25px;
    }    
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 991px){
        flex-direction: column-reverse;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-flow: column;
        text-align: center;
    }
`;
const TextContent = styled.div`
    width: 45%;
    flex: 0 1 auto;
    z-index: 3;
    @media screen and (max-width:991px){
        width: 100%;
        padding: 0;
        
    }
    h3{
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 0.8;
    }
    h2{
        font-weight: 500;
        text-transform: uppercase;
        margin: 1vh 0;
        @media screen and (max-width: 1200px){
            font-size: 1rem;
        }
        @media screen and (max-width: 550px){
            font-size: 0.8rem;
        }
    }
    p{
        color: #000 !important;
        font-size: 1rem;
        margin: 1vh 0;
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.85rem;
            line-height: 1rem;
            margin: 0.5vh 0 3vh 0;
            text-align: start !important;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.65rem;
            line-height: 1rem;
            margin: 0.5vh 0 3vh 0;
            text-align: start !important;
        }
    }  
`;
const ImgContent = styled.div`
    width: 53%;
    flex: 0 1 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;
    display: flex;
    justify-items: center;
    justify-content: center;

    @media screen and (max-width: 991px){
        width: 100%;
        margin-top: 3rem;
        max-width: 600px;
    }

    img{
        width: 100%;
        height: auto;
        max-width: 350px;
        border-radius: 50%;
        z-index: 1500;
        
        @media screen and (min-width: 500px) and (max-width: 1200px){
            height: 41vh;
            width: 100%;
            object-fit: cover;
        }
        @media screen and (min-width: 280px) and (max-width: 500px){
            height: auto;
            max-width: 350px;
            object-fit: cover;
        }
    }
`;
export default Owner1;
