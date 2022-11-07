import './App.css';
function Contact(){
    return(
      <div className='mr'>
          <div className="tasa">
             <h1 className='tartar'>CONTACT US</h1><br />
              <input type="text" placeholder='NAME' className='janito' /><br />
              <input type="text" placeholder='EMAIL' className='janito' /> <br />
              <input type="text" className='davos' placeholder='message' /><br />
             
        </div>
         <div className='hema'>
         <img src="snapchat.jpg" alt="" className='web' />
         <h2>:mbelghali98</h2>
         <img src=" instagram.jpg" alt="" className='web' />
         <h2>:moha_belghali</h2>
         <img src="whatsap.jpg" alt="" className='web' />
         <h2>:0632321965</h2>
         <img src="gmail.jpg" alt="" className='web' />
         <h2>MEDBELGHALI.04@GMAIL.COM</h2>
         </div>
      </div>
        
    )
}
export default Contact;