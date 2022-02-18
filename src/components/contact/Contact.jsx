import './contact.scss';
import {Twitter, LinkedIn, GitHub} from '@material-ui/icons'

export default function Contact() {
  return <div className='contact' id='contact'>
      <div className="left">
        <div className="profile">
          <img src="assets/profile pic copy 2.png" alt="" />
        </div>
        <h1>Lets Chat!</h1>
        <h2>Tell Me About Your Project</h2> 
        <div className="socials">
          <div className="social">
            <a href="" target='_blank'><Twitter className='twitter'/></a>
          </div>
          <div className="social">
            <a href="" target='_blank'><LinkedIn className='linkedin'/></a>
          </div>
          <div className="social">
            <a href="" target='_blank'><GitHub className='github'/></a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="email">
          <h1>Contact</h1>  
          <form>
            <input type="text" />
            <textarea></textarea>
            <button>Send</button>
          </form>
        </div>
      </div> 
  </div>;
}
