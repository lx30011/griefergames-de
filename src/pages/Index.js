import * as React from "react";
import {Parallax} from "react-parallax";
import Fade from "@material-ui/core/Fade";

import "../styles/Index.scss";
import Box from "@material-ui/core/Box";
import CopyableText from "../components/CopyableText";
import PlayerCount from "../components/PlayerCount";
import Grid from "@material-ui/core/Grid";
import StatsComponent from "../components/StatsComponent";
import {Hidden} from "@material-ui/core";
import TutorialVideo from "../components/TutorialVideo";

class Index extends React.Component {

    render() {
        return (
            <Fade in={true} timeout={300}>
                <div>
                    <div style={{
                        position: "relative"
                    }}>
                        <Parallax
                            blur={0}
                            bgImage={require('../assets/img/hub_4_4k.png')}
                            bgImageAlt="GrieferGames Spawn"
                            strength={300}
                        >
                            <div className={"indexHeader"}>
                                <Box className={"content"}>
                                    <span className={"title"}>GrieferGames</span>
                                    <span className={"description"}>
                                        GrieferGames bietet dir die größte Minecraft-Community in Deutschland. Zusammen mit hunderttausenden anderen Spielern kannst du gemeinsam bauen, handeln und Teil der Gemeinschaft werden!
                                        <br/><br/><b>Aber Achtung vor Scammern...</b>
                                    </span>
                                    <span className={"domainText"}>SERVERADRESSE</span>
                                    <CopyableText text={"GrieferGames.net"}/>
                                    <br/>
                                    <PlayerCount/>
                                </Box>
                            </div>
                        </Parallax>
                        <div className={"indexJoinVoice"}>
                            <div className={"voiceContainer"} onClick={() => {
                                document.location.href = "ts3server://ts.griefergames.net";
                            }}>
                                <img src={"/img/teamspeak-logo.png"} alt={"TeamSpeak-Logo"}/>
                                <span>TeamSpeak</span>
                                <img className={"voiceJoinArrow"} src={"/img/ic-arrow.png"} alt={"Join"}/>
                            </div>
                            <div className={"voiceContainer"} onClick={() => {
                                window.open("https://discord.gg/abge", "_blank");
                            }}>
                                <img src={"/img/discord-logo.png"} alt={"Discord-Logo"}/>
                                <span>Discord</span>
                                <img className={"voiceJoinArrow"} src={"/img/ic-arrow.png"} alt={"Join"}/>
                            </div>
                        </div>
                    </div>
                    <Parallax
                        blur={0}
                        bgImage={'/img/mockaroon-bg.png'}
                        bgImageAlt="GrieferGames Spawn"
                        strength={200}>
                        <Grid container justify="center" style={{marginTop: 70}} className={"tutorialContainer"}>
                            <Grid item xs={12} sm={6} md={4}>
                                <div className={"indexTutorialDescriptionContent"}>
                                    <span>So funktioniert es</span>
                                    <div className={"indexTutorialDescription"}>
                                        <ol>
                                            <li>Starte Minecraft und klicke auf „Mehrspieler“</li>
                                            <li>Klicke auf „Server hinzufügen“</li>
                                            <li>Gib die Serveradresse „GrieferGames.net“ ein</li>
                                            <li>Klicke auf „Fertig“ und verbinde dich!</li>
                                        </ol>
                                    </div>
                                    <span></span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} className={"indexTutorialVideo"}>
                                <TutorialVideo/>
                            </Grid>
                        </Grid>
                        <Grid container justify={"center"}>
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <div style={{fontSize: 50, fontWeight: "bold"}}>Statistiken</div>
                                <div style={{fontSize: 20}}>Deutschlands größte Minecraft-Community</div>
                            </Grid>
                            <Grid item xs={12} sm={10} md={8}>
                                <StatsComponent/>
                            </Grid>
                        </Grid>
                        <img src={"/img/effects/bg-pixel-1.png"}
                             style={{position: "absolute", top: 500, height: 200, right: 30}} alt={"Pixel"}/>
                        <img src={"/img/effects/bg-pixel-2.png"}
                             style={{position: "absolute", top: 0, height: 200, right: 30}} alt={"Pixel"}/>
                        <img src={"/img/effects/bg-pixel-3.png"}
                             style={{position: "absolute", bottom: 10, height: 200, right: 30}} alt={"Pixel"}/>
                        <img src={"/img/effects/bg-pixel-2.png"}
                             style={{position: "absolute", top: 130, height: 200, left: 30}} alt={"Pixel"}/>
                        <Hidden smDown>
                            <img src={"/img/abge_with_dog.png"}
                                 style={{position: "absolute", bottom: 50, height: 500, left: -140}}
                                 alt={"Abge"}/>
                            <img src={"/img/blaze.png"}
                                 style={{position: "absolute", top: 300, height: 200, right: 30}} alt={"Blaze"}/>
                        </Hidden>
                    </Parallax>
                </div>
            </Fade>
        )
    }

}

export default Index
