import 'bootstrap/dist/css/bootstrap.min.css';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { riskOption, safeOption, totalOption } from './data';

const App = () => {
  return (
    <div id='main'>
      <h1>Charts</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Safe</Accordion.Header>
          <Accordion.Body>
            <ReactECharts
              option={safeOption}
              lazyUpdate={true}
            />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Risk</Accordion.Header>
          <Accordion.Body>
            <ReactECharts
              option={riskOption}
              lazyUpdate={true}
            />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Total</Accordion.Header>
          <Accordion.Body>
            <ReactECharts
              option={totalOption}
              lazyUpdate={true}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
