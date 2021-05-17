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
		to: [{
			marginTop: location ? width <= 768 ? 
			"-250px" : '-250px' : width <= 768 ?
			 '-250px': '-250px',
			marginRight: location ? 
			location.name === 'fromTechnology' ?
			"0%" : location.name === 'fromSkill' ?
			'0%' : '0%' : '0%' ,
		 }],
  	from: {
			marginTop: location ? '0px' : '20px',
			marginRight: location ?  '100%' : "60%",
			},
			config: {
			duration: 300
			}
		})

		// Leafsize animation --------------


		// Gear animation --------------

		const gearimg = useSpring({
		to: [{marginRight: '100%' , marginTop: location ? '0%' : '0%' }],
  			from: {marginRight: location ? 
				location.name === 'fromTechnology' ?
				'-20%' : location.name === 'fromSkill' ? 
				'-100%' : '100%' :  '0%', 
			
			marginTop: location ?  
			location.name === 'fromTechnology' ?
			 '-25%' : location.name === 'fromSkill' ? 
			 '0%' : '100%' : '-25%'
			 },
			config: {
				duration: 300 
			}
		})

		// Brush animation --------------
		
		const brushimg = useSpring({
		to: [{marginLeft: location ?
			location.name === 'fromTechnology' ?
				'100%' : location.name === 'fromSkill'? 
				'100%' : '0%' : '100%',

			marginTop: width <= 768 ? location ? 
			location.name === 'fromTechnology' ? '-80px' :
			location.name === 'fromSkill' ? 
			'-80px' : '-80px' : '-80px'   :    location ? 
			location.name === 'fromTechnology' ? '-110px' :  
			location.name === 'fromSkill' ? 
			'-110px' : '-110px' : '-110px'
		,	
		}],
  		from: {marginLeft: location ?
			location.name === 'fromTechnology' ?
			 '100%' : location.name === 'fromSkill'? 
			 '-5%' : '0%' : '0%',
			
			marginTop: width <= 768 ? location ? 
			location.name === 'fromTechnology' ?  '-80px' :
			location.name === 'fromSkill' ? 
			'-250px' : '-80px' : '-80px'  :  location ? 
			location.name === 'fromTechnology' ?  '-110px' :  location.name === 'fromSkill' ? 
			'-380px' : '-110px' : '-110px'
			},
			config: {
				duration: 300
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