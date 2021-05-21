import {useSpring, animated} from 'react-spring'
import  {React } from 'react' 
import { Link} from 'react-router-dom'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import circle from '../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'


const Environment = (props) =>{

	let location = props.location.aboutProps
	const { innerWidth: width} = window;
	console.log(width)
		


    const container = useSpring({
			to: [{height: location? width <= 768 ?
				"250px" : '400px' :
				width <= 768 ?
				"250px" : "400px"}],


  		from: {height:location? width <= 768 ?
				"250px" : '400px' :
				width <= 768 ?
				"250px" : "550px"}
		})


		// Leaf animation --------------

		const leafimg = useSpring({
			to: [{top: '-48px', left: '50%' }],


			from: {top: width <= 768 ? '80px' : '140px',


			left: location ? location.name === 'fromTechnology'?
			'0%' :  '0%' : '30%' },
			config: {
				duration: 500
			}
		})

		// Leafsize animation --------------


		// Gear animation --------------

		const gearimg = useSpring({
		to: [{
			left: '0%' ,
			
			top: width <= 768 ?  
			location ? '37px' : '37px' :  location ? 
			'97px' : '97px'
	
		}],


			from: {left: location ? 
			location.name === 'fromTechnology' ?
			'50%' : '100%' :  '50%', 
			
			top: width <= 768 ? location ?  
			location.name === 'fromTechnology' ?
			 '-37px' : '37px' : '37px' : location ?  
			 location.name === 'fromTechnology' ?
				'-97px' : '97px' : '97px'
			 },
			config: {
				duration: 500 
			}
		})

		// Brush animation --------------
		
		const brushimg = useSpring({
		to: [{right: location ?
			location.name === 'fromTechnology' ?
			'0%' : '0%' : '0%',

			top: width <= 768 ? location ? 
			location.name === 'fromTechnology' ? 
			'37px' : '37px' : '37px'   :    location ? 
			location.name === 'fromTechnology' ?
			'97px' : '97px' : '97px'
		,	
		}],
  		from: {right: location ?
			location.name === 'fromTechnology' ?
			'0%' : '50%' : '30%',
			
			top: width <= 768 ? location ? 
			location.name === 'fromTechnology' ?  
			'37px' : '-37px' : '37px'  :  location ? 
			location.name === 'fromTechnology' ? 
			'97px' : '-97px' : '97px'
			},
			config: {
				duration: 500
			}
		})


    return(
			<div>
				
					<animated.div className="environment-banner" style={container}>
						<h1>Environment</h1>
						<animated.div className="environment-img1" style={leafimg}  >
								
							<Link to={{
								pathname:'/homeBanner',
								aboutProps:{
									name: 'fromEnvironment'
								}
							}}>
								<img  className='leaf-img' src={leaf} alt='img' ></img>
							</Link>
							
						</animated.div>
						<animated.div className="environment-img2"  style={gearimg}>

							<Link to={{
								pathname:'/technology',
								aboutProps:{
									name: 'fromEnvironment'
								}
							}}>
								<img  src={ circle} alt='img' >
								</img>
							</Link>
							
						</animated.div>
						<animated.div className="environment-img3" style={brushimg} >

						<Link to={{
								pathname:'/skill',
								aboutProps:{
									name: 'fromEnvironment'
								}
							}}>
							<img src={brush} alt='img' >
							</img>
						</Link>

						</animated.div>
					</animated.div>
				
				<SectionOne />
				<SectionTwo />
				<SectionThree />
		</div>
    )
}

export default Environment