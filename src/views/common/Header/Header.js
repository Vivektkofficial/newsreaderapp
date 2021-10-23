import React,{ useState } from 'react'
import Grid from "@material-ui/core/Grid";
// import Button from '@mui/material/Button';
import { FaSearch } from 'react-icons/fa';
import './Header.scss'

export default function Header() {
    const [searchFocus, setsearchFocus] = useState(false);
    return (
        <Grid
            direction="row"
            alignItems="center"
            justify="center"
            className="header-container shadowBottom"
          >
        <Grid item className="title-container">
            <h1 className="title-txt title-one">News</h1>
            <h1 className="title-txt title-two">Reader</h1>
        </Grid>
        <Grid item
            
            className="serch-box-container"
        >
            <Grid container row className="search-bx-container">
                <Grid className="serch-icon-container">
                   <FaSearch className="search-icon"/>
                </Grid>
                <Grid className="serch-input-container">
                    <input  onFocus={()=>setsearchFocus(true)} placeholder="Search here..." className="search-input"/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item
            className="advanced-serch-container"
        >
            <button>Advanced Search</button>
        </Grid>
        </Grid>
    )
}
