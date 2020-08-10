import * as React from "react";

import "../styles/Footer.scss"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

class Footer extends React.Component {
    render() {
        return (
            <Grid container justify={"center"} className={"footer"}>
                <Grid item xs={12} sm={6} md={3}
                      style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: 90}}>
                    <img src={"/img/griefergames_schriftzug.png"}
                         alt={"GrieferGames Schriftzug"} style={{width: 170}}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={"footerOuterContainer"}>
                    <h2>BRAUCHST DU HILFE?</h2>
                    <div className={"footerInnerContainer"}>
                        <p>Für Fragen, Informationen und Hilfe steht dir das GrieferGames Support-Team zur Verfügung.</p>
                        <p>Viele Fragen haben wir bereits in unseren <a style={{color: "red", textDecoration: "none"}}
                                                                        href={"https://griefergames.de/faq/"}
                                                                        target={"_blank"}
                                                                        rel="noopener noreferrer">FAQ</a> beantwortet
                            – schau doch mal vorbei!</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={"footerOuterContainer"}>
                    <h2>SHOP-SUPPORT</h2>
                    <div className={"footerInnerContainer"}>
                        <p>Solltest du ein Problem mit deinen gekauften Produkten haben, wende dich jederzeit an
                            unser Shop-Support-Team unter <a
                                href={"mailto:shop@griefergames.net"}
                                style={{color: "red", textDecoration: "none"}}
                                target={"_blank"}
                                rel="noopener noreferrer">shop@griefergames.net</a>!</p>
                        <Button variant="contained"
                                style={{
                                    backgroundColor: "rgb(220,0,0)",
                                    color: "white",
                                    fontWeight: "bold",
                                    marginRight: 20
                                }}
                                onClick={() => {
                                    document.location.href = "https://store.griefergames.net/"
                                }}>
                            <ShoppingCartIcon style={{marginRight: 10}}/> shop
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={"footerOuterContainer"}>
                    <h2>FOLGE UNS</h2>
                    <div className={"footerInnerContainer footerFollowUs"}>
                        <div><FacebookIcon style={{color: "rgb(70,70,255)"}}/>
                            <a href={"https://www.facebook.com/GrieferGamesNW"}>Facebook</a>
                        </div>
                        <div>
                            <YouTubeIcon style={{color: "rgb(255,50,50)"}}/>
                            <a href={"https://www.youtube.com/user/AbgegrieftHD"}>YouTube</a>
                        </div>
                        <div>
                            <InstagramIcon style={{color: "brown"}}/>
                            <a href={"https://www.instagram.com/griefergamesnw"}>Instagram</a>
                        </div>
                        <div>
                            <TwitterIcon style={{color: "rgb(120,120,255)"}}/>
                            <a href={"https://twitter.com/GrieferGamesNW"}>Twitter</a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} style={{background: "black", marginTop: 20}} className={"footerBottom"}>
                    <a href={"https://store.griefergames.net/allgemeine_geschaeftsbedingungen/"}>AGB</a>
                    <a href={"https://store.griefergames.net/datenschutz/"}>Datenschutz</a>
                    <a href={"https://store.griefergames.net/impressum/"}>Impressum</a>
                    <a href={"https://regeln.griefergames.net"}>Regelwerk</a>
                </Grid>
            </Grid>
        )
    }
}

export default Footer
