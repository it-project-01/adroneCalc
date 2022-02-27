import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import "./Calc.css";

export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = { display: "0" };
  }
  addText = (text) => {
    this.setState((state) => {
      return {
        display: ((state.display !== "0" && state.display) || "") + text,
      };
    });
  };
  clear = (state) => {
    this.setState((state) => {
      return {
        display: "0",
      };
    });
  };
  back = (state) => {
    this.setState((state) => {
      return {
        display: state.display.slice(0, state.display.length - 1) || "0",
      };
    });
  };
  buttons = [
    [
      {
        text: "7",
        colSpan: 1,
        click: () => {
          this.addText(7);
        },
      },
      {
        text: "8",
        colSpan: 1,
        click: () => {
          this.addText(8);
        },
      },
      {
        text: "9",
        colSpan: 1,
        click: () => {
          this.addText(9);
        },
      },
      {
        text: "/",
        colSpan: 1,
        click: () => {
          this.addText("/");
        },
      },
    ],
    [
      {
        text: "4",
        colSpan: 1,
        click: () => {
          this.addText(4);
        },
      },
      {
        text: "5",
        colSpan: 1,
        click: () => {
          this.addText(5);
        },
      },
      {
        text: "6",
        colSpan: 1,
        click: () => {
          this.addText(6);
        },
      },
      {
        text: "*",
        colSpan: 1,
        click: () => {
          this.addText("*");
        },
      },
    ],
    [
      {
        text: "1",
        colSpan: 1,
        click: () => {
          this.addText(1);
        },
      },
      {
        text: "2",
        colSpan: 1,
        click: () => {
          this.addText(2);
        },
      },
      {
        text: "3",
        colSpan: 1,
        click: () => {
          this.addText(3);
        },
      },
      {
        text: "-",
        colSpan: 1,
        click: () => {
          this.addText("-");
        },
      },
    ],
    [
      {
        text: "0",
        colSpan: 1,
        click: () => {
          this.addText(0);
        },
      },
      {
        text: ".",
        colSpan: 1,
        click: () => {
          this.addText(".");
        },
      },
      {
        text: "=",
        colSpan: 1,
        click: () => {
          this.setState((state) => {
            return {
              display: eval(state.display),
            };
          });
        },
      },
      {
        text: "+",
        colSpan: 1,
        click: () => {
          this.addText("+");
        },
      },
    ],
  ];
  render() {
    return (
      <Table className="bg-secondary p-5 rounded">
        <thead>
          <tr>
            <th colSpan={4} className="text-end bg-dark text-white rounded p-3">
              {this.state.display}
            </th>
          </tr>
        </thead>
        <tbody className="p-3">
          <tr>
            <td colSpan={2} onClick={this.clear}>
              <Button className="bg-dark text-align-center w-100">AC</Button>
            </td>
            <td colSpan={2} onClick={this.back}>
              <Button className="bg-dark text-align-center w-100">
                Backspace
              </Button>
            </td>
          </tr>
          {this.buttons.map((row, index) => {
            return (
              <tr key={index} className="px-5">
                {row.map((btn, index) => {
                  return (
                    <td colSpan={btn.colSpan} key={index} className="bottomTd">
                      <Button
                        colSpan={btn.colSpan}
                        onClick={btn.click}
                        className="bg-dark text-align-center w-100"
                      >
                        {btn.text}
                      </Button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
