import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

class PlayerCount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {players: <CircularProgress size={15}/>};
    }

    componentDidMount() {
        this._ismounted = true;
        this.refresh();
        this.timer = setInterval(() => {
            this.refresh();
        }, 15000);
    }

    refresh() {
        axios.get("/api/server")
            .then(res => res.data)
            .then(json => {
                if (json.online) { // check if stats are loaded
                    if (this._ismounted)
                        this.setState({players: json.online})
                }
            }).catch(err => {
            console.log(err);
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this._ismounted = false;
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <img src={"/img/online_players.png"} style={{height: 35}} alt={"Players Online"}/>
                <div style={{display: "flex", alignItems: "center"}}>
                    <span>{this.state.players} Spieler <b>online</b></span>
                </div>
            </div>
        );
    }

}

export default PlayerCount