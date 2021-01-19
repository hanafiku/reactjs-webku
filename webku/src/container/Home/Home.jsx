import React, { Component, Fragment } from "react";
import BlogPost from "../pages/BlogPost/BlogPost";
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import YoutubeComppage from "../pages/YoutubeComp/Youtubecomppage";
import Product from "../pages/Product/Product";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Home.css'
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

class Home extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
            <div className="navigation">
                <Link to="/">Blog Post</Link>
                <Link to="/Product">Product</Link>
                <Link to="/youtube">Youtube</Link>
            </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:postid"component={DetailPost}/>
          <Route path="/product" component={Product} />
          <Route path="/youtube" component={YoutubeComppage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default Home;
