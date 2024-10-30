import '../style/style.css'
import Image from "next/image";
function NavBar(){
    return(
        <nav className="hero-text">
            <div className="color">
            <div className="head">
                <h1>Hi , I am John,</h1>
                <h3> Creative Technologist</h3>
            </div>
            <div className="line-2">
                <h5>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."<br />
                    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
</div>
                <button className="mt-1"><a className="" href="#">Download Resume</a></button>
            </div>
            <div className="hero-image">
                <Image src="/person.png" alt="person" width={300} height={200} ></Image>    
            </div>
            <div className="mt">
                <h4 className="view">view all</h4>
            <div className="mt-2">
                
                <h4>MAKING A DESIGN SYSTEM FROM SCRATCH</h4>
                <h5> 12 feb 2020 | design , pattern</h5>
                <p>Lorem ipsum dolor sit amet . The graphic and<br />
                    typographic operators know this well<br />
                    in reality all the professions dealing with<br />
                    the universe of communication have a stable</p>
                <br />
            </div>
            <div className="mt-3">
                <div className="vertical">
                    <h4 className="short">Recent post</h4>
                    <h4>MAKING A DESIGN SYSTEM FROM <br />SCRATCH</h4>
                    <h5> 12 feb 2020 | design , pattern</h5>
                    <p>Lorem ipsum dolor sit amet . The graphic and<br />
                        typographic operators know this well<br />
                        in reality all the professions dealing with<br />
                        the universe of communication have a stable<br /></p>
            
                        </div>
                </div>
            </div>
    

        <div className="f-w">
                <h4>Featured work</h4>


                <div className="dashbord">
                  <div className='pic1'>
                  <Image src="/feature1.png" alt="feature1" width={200} height={100} ></Image>
                  </div>
                    <h3>Designing Dashbord</h3>
                    <h6><button className="mt-0">2020</button> Dashbord</h6>
                    <h5>“I'm selfish, impatient and a little insecure.<br />
                        I make mistakes, I am out of control and at times hard to handle.</h5>
                </div>

                <div className="dashbord2">
                <div className='pic2'>
                  <Image src="/feature3.png" alt="feature3" width={200} height={110} ></Image>
                  </div>
                    <h3>Designing Dashbord</h3>
                    <h6><button className="mt-0">2020</button>Dashbord</h6>
                    <h5>“I'm selfish, impatient and a little insecure.<br />
                        I make mistakes, I am out of control and at times hard to handle.</h5>

                </div>


                <div className="dashbord3">
                <div className='pic3'>
                  <Image src="/feature2.png" alt="feature2" width={200} height={100} ></Image>
                  </div>
                    <h3>Designing Dashbord</h3>
                    <h6><button className="mt-0">2020</button>Dashbord</h6>
                    <h5>“I'm selfish, impatient and a little insecure.<br />
                        I make mistakes, I am out of control and at times hard to handle.</h5>
    </div>
            </div>
                  </nav>

                  
    );
}
export default NavBar;