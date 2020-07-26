import React, { Component } from "react";
import { Modal, Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import Config from "../../config";
import "./table.css";
import CalanderModal from "../DataModal/CalaenderModal";

export default class ListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberData: [],
      changestate: false,
      header: ["ID", "Real_name", "Time_Zone"],
      visible: false,
      activity: []
    };
  }

  componentDidMount() {
    fetch(Config.api + "/getTable")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.members);
        this.setState({
          MemberData: res.members,
        });
      });
  }

  GetModal = (value) => {
    this.setState({
      activity: value,
      changestate: true,
      visible: true,
    });
  };

  showModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(this.state.changestate);
    return (
      <div>
        <Card>
          <Row>
            <Col>
              <div className="p-2">
                <table>
                  <thead>
                    {this.state.header.map((item) => {
                      return <th>{item}</th>;
                    })}
                  </thead>

                  {this.state.MemberData.map((item) => {
                    return (
                      <tbody
                        className="tdata"
                        onClick={() => this.GetModal(item.activity_periods)}
                      >
                        <td>{item.id}</td>
                        <td>{item.real_name}</td>
                        <td>{item.tz}</td>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </Col>
          </Row>
        </Card>
        {this.state.changestate === true && (
          <div>
            <Modal
              visible={this.state.visible}
              onOk={this.handleOk}
              width={650}
              style={{ top: 8 }}
              onCancel={this.handleCancel}
              footer={null}
              size="lg"
            >
              {this.state.activity.length > 0 && <CalanderModal activityPeriods={this.state.activity}/>}
            </Modal>
          </div>
        )}
      </div>
    );
  }
}
