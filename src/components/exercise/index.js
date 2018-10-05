import React , {Component} from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './leftPane';
import RightPane from './rightPane';

export default class extends Component {
    render(){
        const styles ={
            Paper: { padding:20, marginTop:20, marginBottom:20}
        }
        return(
            <Grid container>
             <Grid item sm>
               <LeftPane styles = {styles} />
             </Grid>
             <Grid item sm>
                <RightPane styles = {styles}/>
             </Grid>
            </Grid>
        );
    }
}