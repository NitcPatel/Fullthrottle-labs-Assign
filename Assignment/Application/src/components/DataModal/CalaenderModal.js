import React, { Component } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import "antd/dist/antd.css";

export default class CalaenderModal extends Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 1,
        Subject: "Appointment Date 1",
        StartTime: this.props.activityPeriods[0].start_time,
        EndTime: this.props.activityPeriods[0].end_time,
      },
      {
        Id: 2,
        Subject: "Appointment Date 2",
        StartTime: this.props.activityPeriods[1].start_time,
        EndTime: this.props.activityPeriods[1].end_time,
      },
      {
        Id: 3,
        Subject: "Appointment Date 3",
        StartTime: this.props.activityPeriods[2].start_time,
        EndTime: this.props.activityPeriods[2].end_time,
      },
    ];
  }

  render() {
    console.log(this.props.activityPeriods);
    return (
      <div className="mt-5">
        <ScheduleComponent
          height="450px"
          selectedDate={new Date(2020, 1, 7)}
          eventSettings={{ dataSource: this.data }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    );
  }
}
