import * as React from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

class TutorialVideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {videoId: null}
    }

    componentDidMount() {
        axios.get("/api/config")
            .then(res => res.data)
            .then(json => {
                this.setState({videoId: json.tutorial_video_id})
            })
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.videoId == null)
            return (<div style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}><CircularProgress size={60}/></div>)
        return (
            <iframe height="100%" width="100%" src={"https://www.youtube.com/embed/" + this.state.videoId}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    title={"Tutorial"}
                    allowFullScreen></iframe>
        )
    }

}

export default TutorialVideo