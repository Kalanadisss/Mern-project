import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
    <main>
    <div>
      <nav>
        <img src={logo} alt="jobify" className='logo'/>
      </nav>
      <div className="container">
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus, nisl ac aliquam pulvinar,
             metus velit ornare ligula, sed pulvinar lectus neque eu augue. Pellentesque auctor, quam eu porta elementum,
              neque magna posuere augue, in malesuada sapien diam ac felis. Morbi molestie tellus ut elit rutrum, eget imperdiet justo feugiat.
            </p>
            <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job-hunt' className='img main-img'/>
      </div>
    </div>
    </main>
  )
}

export default Landing
