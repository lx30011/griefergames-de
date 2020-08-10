import React from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

class StatsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: null, error: null};
    }

    componentDidMount() {
        axios.get("/api/stats")
            .then(res => res.data)
            .then(json => this.setState({data: json}))
            .catch(err => {
                    console.log(err);
                    this.setState({error: err})
                }
            )
    }

    render() {
        return (
            <Grid container justify={"space-evenly"}>
                {
                    this.state.error != null ? <p style={{zIndex: 1}}>Statistiken konnten nicht geladen werden</p> :
                        this.state.data == null ? <CircularProgress/> :
                            this.state.data.map((el, index) => (
                                <Grid item xs={6} md={4} key={el.internalName}>
                                    <StatisticComponent wait={100 * index} data={el}/>
                                </Grid>
                            ))
                }
            </Grid>
        )
    }

}

class StatisticComponent extends React.Component {
    render() {
        return (
            <Grid container justify={"center"} style={{}}>
                <div style={{
                    width: 230,
                    //background: "rgb(10,32,41)",
                    background: "linear-gradient(0deg, rgb(10,32,41) 0%, rgb(25,47,56) 100%)",
                    margin: 20,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 10,
                    boxShadow: "0 0 20px black",
                    zIndex: 1,
                    overflow: "hidden"
                }}>
                    <img src={"/img/stats/" + this.props.data.internalName + ".png"} style={{width: "100%"}}
                         alt={this.props.data.name}/>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        padding: "10px 10px 30px 10px"
                    }}>
                        <div style={{fontSize: 25, fontWeight: "bold"}}>{this.props.data.content}</div>
                        <div style={{fontSize: 18, color: "rgb(33,95,124)"}}>{this.props.data.name}</div>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default StatsComponent;