import styles from './App.module.css';
import logo from './assets/gritbplanet.png';

function App()

{
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p> 

        <img src={logo} 
        alt="big dumb dummy" 
        var width ="250" 
        height ="250" 
        class="styles.logo"    
        href="https://twitter.com/gritknox"
        />
          
        </p>
        <p>
         Still trying.  Still failing.  Still learning.
        </p>
     
      </header>
    </div>
         );
}

export default App;
