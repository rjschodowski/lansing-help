import React from 'react'
import Layout from '../components/Layout'
import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';
import DirectionsIcon from '@material-ui/icons/Directions';
import LanguageIcon from '@material-ui/icons/Language';

const Food = () => {
    return (
       <Layout>
           <div className="location-wrapper">
                <ul className="flex items-baseline">
                    <li>
                        <a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry" alt="Mobile Food Pantry website link" target="_blank">Mobile Food Pantry</a>
                    </li>
                    <li>
                        <IconButton aria-label="Call">
                            <a href="tel:5173641000" alt="call" target="_blank">
                                <CallIcon />Call
                            </a>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <a href="https://www.lansingmi.gov/530/Mobile-Food-Pantry" alt="Mobile Food Pantry website link" target="_blank">
                                <LanguageIcon />Website
                            </a>
                        </IconButton>
                    </li>
                </ul>
            </div>
       </Layout>
    )
}

export default Food