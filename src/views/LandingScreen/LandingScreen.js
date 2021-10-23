import React,{useEffect,useState} from 'react'
import './LandingScreen.scss'
import Grid from "@material-ui/core/Grid";
import { Header } from '../common';
import { NewsList } from './LandingComponentes';
import axios from 'axios';
export default function LandingScreen() {
    const [searchText, setSearchText] = useState("international");
    useEffect(() => {
        getNewsList()
      })
function getNewsList(){
    const header = {
        'Content-Type': 'application/json',
        'X-Requested-With': `XMLHttpRequest`,
        'x-api-key':`IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE`
        }
        const params=null
        axios.get('https://get.scrapehero.com/news-api/news/?q=international',{
            headers: {
                "mode": 'cors',
                'Content-Type': 'application/json',
                'X-Requested-With': `XMLHttpRequest`,
                'x-api-key':`IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE`
            }
          })
        .then((response)=>{
            console.log(response,"got  it")
        })


}  
    return (
        <React.Fragment>
            <Header/>
            <Grid
            container
            row
            className="news-main-container"
            >
                <Grid className="news-list-container">
                    <NewsList/>
               </Grid>
                <Grid className="news-details-container">

               </Grid>
            </Grid>
        </React.Fragment>
    )
}
