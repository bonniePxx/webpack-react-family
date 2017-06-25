import React from "react";
import styles from "../styles/app/demo.scss";

class Index extends React.Component {
    render() {
        return ( <div>
            <div >
            <span > { process.env.NODE_ENV } < /span> < h2 className={styles.little} > 图片 < /h2> < /div > < /div >
        );
    }
}



export default Index