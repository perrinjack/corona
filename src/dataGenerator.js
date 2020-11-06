import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Dashboard from './dashboard.js';
class DataGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [0],
      updatedlocalData: '',
      nationalData: [0],
      updatednationallData: '',
      test: this.props.count,
    };
  }
  localData() {
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
          `filters=areaType=ltla;areaName=${this.props.count}&` +
          'structure={"date":"date","newCases":"newCasesByPublishDate"}'
      )
      .then((response) => {
        console.log(response.headers['last-modified']);
        this.setState({
          localData: response.data.data,
          updatedlocalData: response.headers['last-modified'],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  nationalData() {
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
          `filters=areaType=overview&` +
          'structure={"date":"date","newCases":"newCasesByPublishDate", "deaths":"newDeaths28DaysByPublishDate"}'
      )
      .then((response) => {
        this.setState({
          nationalData: response.data.data,
          updatednationalData: response.headers['last-modified'],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.nationalData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      this.localData();
    }
  }

  render() {
    return (
      <div>
        <Dashboard
          localdata={this.state.localData}
          updatedlocalData={this.state.updatedlocalData}
          nationaldata={this.state.nationalData}
          updatednationalData={this.state.updatednationalData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

export default connect(mapStateToProps)(DataGenerator);