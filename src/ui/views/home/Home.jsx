import Intro from '../../../assets/images/illustration-intro.svg'
import User1 from '../../../assets/images/avatar-anisha.png'
import User2 from '../../../assets/images/avatar-ali.png'
import User3 from '../../../assets/images/avatar-richard.png'
import NumberComponent from './NumberComponent'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
        <section id="hero">
            <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
                {/* Left item */}
                <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                        Bring everyone together to build better products
                    </h1>
                    <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                    </p>
                    <div className="flex justify-center md:justify-start">
                     <a href="#" className=" p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
                    </div>
                </div>
                 {/* Right item */}
                 <div className="md:w-1/2">
                    <img src={Intro} alt="" />                
                 </div>
            </div>
        </section>

        <section id="features" >
            <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div className='flex flex-col space-y-12 md:w-1/2'>
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                    </p>
                </div>
                <div className='flex flex-col space-y-8 md:w-1/2'>
                <NumberComponent number="01"title="Track Company-wide progress" paragraphToShow="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."/>
                <NumberComponent number="02"title="Advanced built-in reports" paragraphToShow="Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed."/>
                <NumberComponent number="03"title="Everything you need in one place" paragraphToShow=" Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution."/>
                </div>
               
                
                
            </div>
        </section>
        <section id='testimonials'>
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center">
                    What's Different About Manage?
                </h2>
                {/* Testimonials Container */}
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <Testimonial userName="Anisha Li" testimonial="Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated." imgRef={User1}/>
               <Testimonial userName="Ali Bravo" testimonial="We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused." imgRef={User2}/>
               <Testimonial userName="Richard Watts" testimonial="MManage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated." imgRef={User3}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home