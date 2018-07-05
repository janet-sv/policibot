import React from 'react';
import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MixBarChart = ({
  data,
  legend,
}) => (
  <BarChart
    width={900}
    height={400}
    data={data}
    margin={{top: 5, right: 30, left: 50, bottom: 5}}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="stole" fill="#d90022" />
    <Bar dataKey="rob" fill="#ffcb44" />
    <Bar dataKey="violent" fill="#ff4471" />
    <Bar dataKey="murder" fill="#4caf50" />
    <Bar dataKey="drugs" fill="#2196f3" />
    <Bar dataKey="others" fill="#795548" />
  </BarChart>
);

MixBarChart.propTypes = {
  legend: PropTypes.node,
};

MixBarChart.defaultProps = {
  legend: null,
};

export default MixBarChart;