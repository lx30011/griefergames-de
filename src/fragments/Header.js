import * as React from "react";
import Hidden from "@material-ui/core/Hidden";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Fade from "@material-ui/core/Fade";
import Drawer from "@material-ui/core/Drawer";

const routes = <ul>
    <li>
        <NavLink to="/" activeStyle={{color: "red"}} exact>startseite</NavLink>
    </li>
    <li>
        <a href={"https://griefergames.net/news"}>news</a>
    </li>
    <li>
        <a href={"https://griefergames.net/forum"}>forum</a>
    </li>
    <li>
        <a target="_blank" rel="noopener noreferrer" href={"https://minecraft-server.eu/vote/index/1A73C/"}>vote</a>
    </li>
    <li>
        <a href={"https://grieferwert.net"}>preise</a>
    </li>
</ul>;

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {onTop: true, openNav: false};
    }


    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            this.setState({onTop: document.scrollingElement.scrollTop < 50});
        });
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({hideNav: window.innerWidth <= 760});
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.listener)
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        return (
            this.state.hideNav ?
                <div>
                    <AppBar position="fixed" style={{background: "black"}}>
                        <Toolbar>
                            <img src={"/img/griefergames_schriftzug.png"}
                                 alt={"Griefergames Schriftzug"} style={{width: 150, transform: "translateY(15px)"}}/>
                            <div style={{flexGrow: 1, display: "flex", flexDirection: "row-reverse", paddingRight: 20}}>
                                <IconButton style={{color: "red", display: "none"}}>
                                    <AccountCircleOutlinedIcon/>
                                </IconButton>
                                <IconButton style={{color: "red"}} onClick={() => {
                                    document.location.href = "https://store.griefergames.net/"
                                }}>
                                    <ShoppingCartOutlinedIcon/>
                                </IconButton>
                            </div>
                            <IconButton edge="start" color="inherit" aria-label="menu"
                                        onClick={() => this.setState({openNav: true})}>
                                <MenuIcon/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer anchor={"right"} className={"navDrawer"} open={this.state.openNav} ModalProps={{
                        onBackdropClick: () => {
                            this.setState({openNav: false})
                        },
                        onClick: () => {
                            this.setState({openNav: false})
                        }
                    }}>
                        <div style={{textAlign: "center"}}>
                            <img src={"/img/griefergames_schriftzug.png"}
                                 alt={"Griefergames Schriftzug"} style={{width: 140, transform: "translateY(15px)"}}/>
                        </div>
                        {routes}
                    </Drawer>
                </div>
                :
                <Fade in={true}>
                    <div className={"headerContainer"}>
                        <nav>
                            <Hidden smDown><img src={"/img/griefergames_schriftzug.png"}
                                                alt={"Griefergames Schriftzug"}/></Hidden>
                            <div className={"header"}>
                                {routes}
                            </div>
                            <div className={"buttonsDiv"}>
                                <Button variant="contained"
                                        style={{
                                            backgroundColor: "red",
                                            color: "white",
                                            fontWeight: "bold",
                                            marginRight: 20
                                        }}
                                        onClick={() => {
                                            document.location.href = "https://store.griefergames.net/"
                                        }}>
                                    <ShoppingCartIcon style={{marginRight: 10}}/> shop
                                </Button>
                                <Button variant="contained"
                                        style={{
                                            backgroundColor: "rgb(210,0,0)",
                                            color: "white",
                                            fontWeight: "bold",
                                            display: "none"
                                        }}>
                                    <AccountCircleIcon style={{marginRight: 10}}/> login
                                </Button>
                            </div>
                        </nav>
                    </div>
                </Fade>
        );
    }

}

export default Header
