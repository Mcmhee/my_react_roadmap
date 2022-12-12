
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';




function App() {

  //
  const [textEditingController, settextEditingController] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({});
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

 

  function getDefinition(search) {
    setLoading(true)
      axios.get(url + search).then((response) => {
        if (response !== null){
          setLoading(false)
          setContent(response)
        }
      }).catch((e) => {
        setLoading(false)
        setContent({})
      })
  };

  function playAudio() {
    console.log("audio",content.data[0].phonetics[1]["audio"] )
    new Audio(content.data[0].phonetics[1]["audio"]).play();
  }

  return (
    <div className="App">
      <div className='container'> 
        {/* header */}
        <div>
          <form className='header' onSubmit={(event)=>{
            event.preventDefault();
            getDefinition(textEditingController)
            }} >
            <input type="text" autoFocus={true} placeholder= "Type the word here" onChange={(event)=> {
                settextEditingController(event.target.value)
                console.log(textEditingController)
          }}/>
          <button type="submit"> 
        { loading === true ? 
        <ReactLoading type="bubbles" color="white"  height="20px" className='loading'/>
        : "Search"
        } </button>
          </form>
        
        </div>

        {/* body */}
        {
           Object.values(content).length !== 0 ?
          (
            
            <div className='body'>
                {/*  */}
                <div className='word'>
                <h2> { content.data[0]["word"] }</h2>
                <button onClick={()=>playAudio()} className="speak">
                  <img src={require('./speak.png')} alt='speak' width="30px" height="30px"/>
                 
                </button>
                </div>

                {/*  */}
              <p className='figure'> {  content.data[0].meanings[0]["partOfSpeech"]} <span className='phonetics'> {content.data[0].phonetic} </span></p>
              <p className='definition'> {content.data[0].meanings[0]["definitions"][0]["definition"]}</p>
              <p className='sentence'> {content.data[0].meanings[0]["definitions"][0]["example"]} </p>
            </div>  
       
          )
           :
           <div> 
            {
             
              // content.status == 404? <p className='wait'> word not found </p> : ""
              //console.log(content.status)
            }
           </div>
        }
        
        
       </div>
    </div>
  );
}

export default App;
