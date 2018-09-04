import React, { Component } from 'react';
import './Dashboard Styles/DashboardStyle.css';
import './Dashboard Styles/DashboardStyle-responsive.css';
import './Dashboard Styles/DashboardBootstrap.css';

import { Link } from 'react-router-dom';


 class ToDoList extends Component {

    render() {
        return (
            <div  className="row mt">
                  <div  className="col-md-3">
                      <section  className="task-panel tasks-widget">
	                	<div  className="panel-heading">
	                        <div  className="pull-left"><h5><i  className="fa fa-tasks"></i> Todo List - Complex Style</h5></div>
	                        <br/>
	                 	</div>
                          <div  className="panel-body">
                              <div  className="task-content">

                                  <ul  className="task-list">
                                      <li>
                                          <div  className="task-checkbox">
                                              <input type="checkbox"  className="list-child" value=""  />
                                          </div>
                                          <div  className="task-title">
                                              <span  className="task-title-sp">Dashgum - Admin Panel Theme</span>
                                              <span  className="badge bg-theme">Done</span>
                                              <div  className="pull-right hidden-phone">
                                                  <button  className="btn btn-success btn-xs"><i  className=" fa fa-check"></i></button>
                                                  <button  className="btn btn-primary btn-xs"><i  className="fa fa-pencil"></i></button>
                                                  <button  className="btn btn-danger btn-xs"><i  className="fa fa-trash-o "></i></button>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div  className="task-checkbox">
                                              <input type="checkbox"  className="list-child" value=""  />
                                          </div>
                                          <div  className="task-title">
                                              <span  className="task-title-sp">Extensive collection of plugins</span>
                                              <span  className="badge bg-warning">Cool</span>
                                              <div  className="pull-right hidden-phone">
                                                  <button  className="btn btn-success btn-xs"><i  className=" fa fa-check"></i></button>
                                                  <button  className="btn btn-primary btn-xs"><i  className="fa fa-pencil"></i></button>
                                                  <button  className="btn btn-danger btn-xs"><i  className="fa fa-trash-o "></i></button>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div  className="task-checkbox">
                                              <input type="checkbox"  className="list-child" value=""  />
                                          </div>
                                          <div  className="task-title">
                                              <span  className="task-title-sp">Free updates always, no extra fees.</span>
                                              <span  className="badge bg-success">2 Days</span>
                                              <div  className="pull-right hidden-phone">
                                                  <button  className="btn btn-success btn-xs"><i  className=" fa fa-check"></i></button>
                                                  <button  className="btn btn-primary btn-xs"><i  className="fa fa-pencil"></i></button>
                                                  <button  className="btn btn-danger btn-xs"><i  className="fa fa-trash-o "></i></button>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div  className="task-checkbox">
                                              <input type="checkbox"  className="list-child" value=""  />
                                          </div>
                                          <div  className="task-title">
                                              <span  className="task-title-sp">More features coming soon</span>
                                              <span  className="badge bg-info">Tomorrow</span>
                                              <div  className="pull-right hidden-phone">
                                                  <button  className="btn btn-success btn-xs"><i  className=" fa fa-check"></i></button>
                                                  <button  className="btn btn-primary btn-xs"><i  className="fa fa-pencil"></i></button>
                                                  <button  className="btn btn-danger btn-xs"><i  className="fa fa-trash-o "></i></button>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div  className="task-checkbox">
                                              <input type="checkbox"  className="list-child" value=""  />
                                          </div>
                                          <div  className="task-title">
                                              <span  className="task-title-sp">Hey, seriously, you should buy this Dashboard</span>
                                              <span  className="badge bg-important">Now</span>
                                              <div  className="pull-right">
                                                  <button  className="btn btn-success btn-xs"><i  className=" fa fa-check"></i></button>
                                                  <button  className="btn btn-primary btn-xs"><i  className="fa fa-pencil"></i></button>
                                                  <button  className="btn btn-danger btn-xs"><i  className="fa fa-trash-o "></i></button>
                                              </div>
                                          </div>
                                      </li>                                      
                                  </ul>
                              </div>

                              <div  className=" add-task-row">
                                  <a  className="btn btn-success btn-sm pull-left" href="todo_list.html#">Add New Tasks</a>
                                  <a  className="btn btn-default btn-sm pull-right" href="todo_list.html#">See All Tasks</a>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
        )
    }
 }

 export default ToDoList;