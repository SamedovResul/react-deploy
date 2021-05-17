import {React, useState } from 'react'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { FaBars, FaStream } from 'react-icons/fa';


const NavBar = (props) =>{

	const [openSide, setopenSide ] = useState(false);

	const handlerSide = function(){
		if(openSide === false){
			setopenSide(true)
		}else{
			setopenSide(false)
		}
		
	}

	console.log(openSide)

	const sideanimation = useSpring({
		to: [{right: openSide ? "0%" : "-50%"}],
		from: {right: openSide ? "-50px" : "-50%"},
		config: {
			duration: 600
		}
	})

	console.log(props)

	return(
		<div className="stick-class">

				<div className='nav-main-menu'>
					<div className='nav-menu'>
						<div className='logo'>
							entesk
						</div>
						<ul className='ul-nav'>
					<li>
						<Link to={{
									pathname:'/homeBanner',
									aboutProps:{
										name: 'fromNavication'
									}
								}}>
								home
						</Link>
					</li>
							

							<li>product</li>
							<li>contact</li>
							<li>about</li>
						</ul>
					</div>


					
				<MediaQuery maxDeviceWidth={780}  >
					<animated.div style={sideanimation} className="sidebar">
						<button className="side-burger" onClick={handlerSide}>
							<FaStream />
						</button>

						<ul>
							<li>Home</li>
							<li>product</li>
							<li>contact</li>
							<li>about</li>
						</ul>

					</animated.div>
					<button className="main-burger" onClick={handlerSide}>
						<FaBars />
					</button>
				</MediaQuery>
				</div>

		</div>
	)
}

export default NavBar