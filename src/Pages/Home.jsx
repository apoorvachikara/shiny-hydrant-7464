import React from 'react'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Roles from '../Components/Roles'
import TopCompanies from '../Components/TopCompanies'
import FeaturedCompaniesPage from './FeaturedCompaniesPage'
import SingleCompanyPage from './SingleCompanyPage'
import DreamJob from '../Components/DreamJob'
import '../Styles/Home.css'
import Accelerateyourjob from '../Components_Avi/Accelerateyourjob'
import Growyour from '../Components_Avi/Growyour'
import Standout from '../Components_Avi/Standout'


const Home = () => {

  return (

                <div>
                        <div className='homedivAyush'>
                              <DreamJob />
                        </div>
                        <div className='topAyush'>
                              <TopCompanies />
                        </div>
                        <FeaturedCompanies />
                        <FeaturedCompaniesPage />
                        <Roles />
                        {/* <div>
                               <Accelerateyourjob/>
                        </div>
                        <div>
                          <Growyour/>
                        </div>
                        <div>
                          <Standout/>
                        </div> */}

                </div >
        )

}

export default Home