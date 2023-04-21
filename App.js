import React, { Fragment } from "react";
import "./App.css";
import Logophoto from "./Photo/Ankit logo.jpg";
import { Row, Col, Container } from "reactstrap";
import { Button } from "reactstrap";
import {
  GitHub,
  Bell,
  Plus,
  ChevronDown,
  Circle,
  Lock,
  Eye,
  Share2,
  Star,
  Code,
  Play,
  GitPullRequest,
  Layout,
  AlertOctagon,
  TrendingUp,
  Tag,
  BookOpen,
  Clock,
  Folder,
  FilePlus,
  AlignJustify,
  Edit2,
} from "react-feather";

function App() {
  return (
    <Fragment>
      <Row className="d-flex justify-content-center justify-content-between p-1  text-white Row-Background-Color">
        <Col sm ={5} className="d-flex align-items-center justify-content-center justify-content-around ">
          <div>
            <GitHub className="rounded-circle" size={20} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-dark text-white"
            />
          </div>
          <div>
            <span>Pull request</span>
            &nbsp;
            <span>Issues</span>
            &nbsp;
            <span>Codespace</span>
            &nbsp;
            <span>Marketplace</span>
            &nbsp;
            <span>Explore</span>
          </div>
        </Col>
        <Col sm={6}></Col>
        <Col sm={1} className=" d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <Bell size={12} />

            <Plus size={10} />
            <ChevronDown size={8} />
            <Circle size={15} />
            <Plus size={12} />
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center justify-content-between p-2   Row-Background-Color">
        <Col sm={3} className=" d-flex    align-items-center text-secondary">
          <Lock size={17} />
          <span className="text-primary">
            Sociome<span>/</span>InHouse-Sociomeeweb_devlopment
          </span>
        </Col>
        <Col sm = {6}></Col>
        <Col sm = {3} className="  d-flex justify-content-center justify-content-around">
          <div className="d-flex  align-items-center">
            <Button outline className="Div-One-Button-One ">
              <Eye size={10} />
              <span className=" ">Watch 0</span>

              <ChevronDown size={10} />
            </Button>
          </div>
          <div className="d-flex  align-items-center ">
            <Button outline className="Div-One-Button-One ">
              <Share2 size={10} />
              <span className="">Fork 0</span>

              <ChevronDown size={10} />
            </Button>
          </div>
          <div className="d-flex  align-items-center">
            <Button outline className="Div-One-Button-One ">
              <Star size={10} />
              <span>Star 2</span>

              <ChevronDown size={10} />
            </Button>
          </div>
        </Col>
      </Row>
      <Row className=" text-white Row-Background-Color p-3">
        <Col sm={5}>
          <div className="d-flex align-items-center d-flex justify-content-center d-flex justify-content-between">
            <div className="text-secondary">
              <Code size={17} />
              <span className="text-light ml-2">Code</span>
            </div>
            <div className="text-secondary">
              <Play size={17} />
              <span className="text-light ml-2">Issues</span>
            </div>
            <div className="text-secondary">
              <GitPullRequest size={17} />
              <span className="text-light ml-2">Pull request</span>
            </div>
            <div className="text-secondary">
              <Play size={17} />
              <span className="text-light ml-2">Action</span>
            </div>
            <div className="text-secondary">
              <Layout size={17} />
              <span className="text-light ml-2">Object</span>
            </div>
            <div className="text-secondary">
              <AlertOctagon size={17} />
              <span className="text-light ml-2">Security</span>
            </div>
            <div className="text-secondary">
              <TrendingUp size={17} />
              <span className="text-light ml-2">Insights</span>
            </div>
          </div>
        </Col>
        <Col sm={7}> </Col>
      </Row>

      <Row className=" ">
        <Col className="col-2   Row-Background-Color"></Col>
        <Col className="col-6 text-white Row-Background-Color">
          <Row className="d-flex justify-content-between ">
            <Col className="d-flex col-5 text-center d-flex justify-content-center justify-content-between p-1 ">
              <div className=" d-flex  align-items-center ">
                <Button outline className="Div-One-Button-One ">
                  <GitPullRequest size={10} />
                  <span className="text-light"> main </span>
                  <ChevronDown size={10} />
                </Button>
              </div>
              <div className=" d-flex  align-items-center ">
                <Button outline className="Div-One-Button-One">
                  <GitPullRequest size={10} />
                  <span> 39branches</span>
                </Button>
              </div>
              <div className=" d-flex  align-items-center">
                <Button outline className="Div-One-Button-One ">
                  <Tag size={10} />
                  <span>0 tage</span>
                </Button>
              </div>
            </Col>
            <Col className="d-flex col-5 d-flex justify-content-center justify-content-between p-1">
              <div className=" d-flex  align-items-center">
                <Button outline className="Div-One-Button-One text-white">
                  <span> Go to file </span>
                </Button>
              </div>
              <div className=" d-flex  align-items-center">
                <Button outline className="Div-One-Button-One ">
                  <span className="text-light "> Add file</span>
                  <ChevronDown size={10} />
                </Button>
              </div>
              <div className="d-flex  align-items-center">
                <Button
                  outline
                  className="Div-One-Button-One text-white bg-success"
                >
                  <Code size={10} />
                  <span>Code</span>
                  <ChevronDown size={10} />
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col className="col-3 d-flex  ">
              <img src={Logophoto} alt="Error" className="rounded-circle" />
              <span className="ml-2">dbm-mern1</span>
            </Col>
            <Col className="col-6  text-center">
              <span className="text-primary">
                https://github.com/Sociomee/adminconsole
              </span>
            </Col>
            <Col className=" col-3 d-flex justify-content-between ">
              <Clock className="text-secondary" />
              <span className="text-secondary">commits</span>
            </Col>
          </Row>
          <Row>
            <Col className="col-3 d-flex ">
              <Folder />
              <span className="ml-2">Public</span>
            </Col>
            <Col className="col-6 text-secondary">
              revert "merge pull request #9 from{" "}
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row>
            <Col className="col-3  d-flex ">
              <Folder />
              <span className="ml-2">src</span>
            </Col>
            <Col className="col-6 text-secondary">
              revert"Merge branch 'master' into
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row>
            <Col className="col-3 d-flex ">
              <FilePlus />
              <span className="ml-2">.env</span>
            </Col>
            <Col className="col-6 text-secondary">
              revert"Merge branch 'master' into
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row>
            <Col className="col-3 d-flex ">
              <FilePlus />
              <span className="ml-2">.gitignore</span>
            </Col>
            <Col className="col-6 text-secondary ">
              revert"Merge branch 'master' into
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row>
            <Col className="col-3 d-flex ">
              <FilePlus />
              <span className="ml-2 ">.READMEmd</span>
            </Col>
            <Col className="col-6 text-secondary">
              revert"Merge branch 'master' into
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row>
            <Col className="col-3 d-flex">
              <FilePlus />
              <span className="ml-2">.pack-lock.json</span>
            </Col>
            <Col className="col-6 text-secondary">
              revert"Merge branch 'master' into
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row>
            <Col className="col-3 d-flex ">
              <FilePlus />
              <span className="ml-2 text-white">package-json</span>
            </Col>
            <Col className="col-6 text-secondary">
              revert"Merge branch 'master' into
            </Col>
            <Col className="col-3 text-secondary">6 months ago</Col>
          </Row>
          <Row className="mt-3 d-flex justify-content-between">
            <Col className="col-3 d-flex justify-content-between">
              <AlignJustify />
              <span className="text-white">README.md</span>
            </Col>
            <Col className="col-1">
              <Edit2 size={15} />
            </Col>
          </Row>
          <Row>
            <h3>Getting Started with Create React App</h3>
          </Row>
          <hr />
          <Row>
            <Col>
              <p className="text-secondary">
                This project was bootstrapped with
                <span className="text-primary ml-2">Create React App.</span>
              </p>
              <h3 className="text-white">Available</h3>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p className="text-secondary">
                in the project directory,you van run
              </p>
              <h4 className="text-white">npm start</h4>
              <p className="text-secondary">runs the app in the devlopment.</p>
            </Col>
          </Row>
        </Col>

        <Col className="col-4 Row-Background-Color">
          <h6 className=" text-white ">About</h6>
          <p className="d-flex text-italic text-secondary">
            No description,website,or topic provided.
          </p>
          <p className="d-flex text-secondary">
            <BookOpen />
            <span className="ml-2">readme</span>
          </p>
          <p className="d-flex text-secondary">
            <Star />
            <span className="ml-2">2 stars</span>
          </p>
          <p className="d-flex text-secondary">
            <Eye />

            <span className="ml-2"> 0 watching</span>
          </p>
          <p className="d-flex text-secondary">
            <Share2 />
            <span className="ml-2"> 0 forks</span>
          </p>
          <hr />
          <h6 className=" text-white ">Releases</h6>
          <p className="mb-0 text-secondary">No Releases Published</p>
          <p className="text-primary">Create a new releases</p>
          <hr />
          <h6 className=" text-white ">Packages</h6>
          <p className=" mb-0 text-secondary">No Packages Published</p>
          <span className="text-primary">publish your first package</span>
          <hr />
          <h6 className=" text-white ">Contributor 6</h6>
          <div>
            <img src={Logophoto} alt="Error" className="rounded-circle " />
            <img src={Logophoto} alt="Error" className="rounded-circle ml-1" />
            <img src={Logophoto} alt="Error" className="rounded-circle ml-1" />
            <img src={Logophoto} alt="Error" className="rounded-circle ml-1" />
            <img src={Logophoto} alt="Error" className="rounded-circle ml-1" />
            <img src={Logophoto} alt="Error" className="rounded-circle ml-1" />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default App;
