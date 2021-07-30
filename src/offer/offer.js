import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Learn from "./learn.png";
import Practice from "./practice.png";
import Grow from "./grow.png";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
    },

    mainHeading: {
        color: "#40af92",
        fontFamily: "GlacialIndifference-Bold",
        fontSize: "14.1129px",
        letterSpacing: 2,
        textAlign: 'center',

    },
    body2: {
        fontFamily: "GlacialIndifference-Regular",
        fontSize: "16px",
        letterSpacing: 1,
        textAlign: 'center',
        paddingBottom: '90px'
    },

    body1: {
        fontFamily: 'Yeseva One',
        fontSize: "54px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: 'center',
    },

    head: {
        fontFamily: "GlacialIndifference-Bold"
    },

    para: {
        fontFamily: "GlacialIndifference-Regular",
        letterSpacing: 1
    },

    image: {
        width: '81px',
        height: '81px'
    }
}));


export default function Offer() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md">
                <Box mt={10}>
                    <div>
                        <Box mb={1.5}><Typography variant="h6" className={classes.mainHeading}>WHAT WE DO</Typography></Box>
                        <Box mb={2}><Typography variant="body1" align="center" className={classes.body1}>
                            Our Offering
                        </Typography></Box>
                        <Typography variant='body2' className={classes.body2}>
                            Our goal is to educate young professionals on the product management industry while also providing users a way to practise their skills.
                        </Typography>
                    </div>
                </Box>

                <div className={classes.root}>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <img src={Learn} alt="learn" className={classes.image} />
                            <h4 className={classes.head}>Learn</h4>
                            <p className={classes.para}>Learn the ins and outs of product management.</p>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Practice} alt="practice" className={classes.image} />
                            <h4 className={classes.head}>Practice</h4>
                            <p className={classes.para}>We provide product management exercises so you can sharpen your skills.</p>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Grow} alt="grow" className={classes.image} />
                            <h4 className={classes.head}>Grow</h4>
                            <p className={classes.para}>Connect aspiring product managers with incredible companies.</p>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}