import {createGlobalStyle} from  'styled-components';

const GlobalStyles = createGlobalStyle`
.Container_Cabeza{
 display: flex;
 width: 100%;
 height: 33.4vh;
 border: 2px solid red;
 justify-content: space-between;
}
.ContainerText{
 display: flex;
 flex-direction: column;
 width: 50%;
 margin: 10px;
 font-family: Impact;
 font-size: 20px;
}

.ContainerImg{
 display: flex;
 width: 50%;
 margin-right: 10px;
 height: 100%;
 justify-content: center; 
} 
`;

export default GlobalStyles